import requests
import time
import sys
import datetime
import smtplib
from pprint import pprint

import lxml.html
import re
import traceback


GMAIL_USERNAME = ""
GMAIL_PASSWORD = ""

SPECIAL_MSG = """
<br />
<br />
In case you need to add it to the shopping cart manually
<br />
http://www.nikestore.com.hk/shoppingcart
<br />
<br />
$j.post("/shoppingcart/add", {upc: "xxxxxxx",count: 1}, function(j) { <br />
    var n = j.shoppingCommand;    <br />
    console.dir(n);   <br />
});  <br />
<br />
<br />
<br />
<br />
"""

def send_simple_email(recipient, email_subject, body_of_email):
	session = smtplib.SMTP('smtp.gmail.com', 587)
	session.ehlo()
	session.starttls()
	session.login(GMAIL_USERNAME, GMAIL_PASSWORD)

	headers = "\r\n".join(["from: " + GMAIL_USERNAME,
	                       "subject: " + email_subject,
	                       "to: " + recipient,
	                       "mime-version: 1.0",
	                       "content-type: text/html"])

	# body_of_email can be plaintext or html!                    
	content = headers + "\r\n\r\n" + body_of_email
	session.sendmail(GMAIL_USERNAME, recipient, content)
	pass

#skuCodeDialog = "768929-623"
def keep_request_page():
	print 'Requesting: %s' % datetime.datetime.now()
	#skuCodeDialog = "768861-601"
	#url = "http://www.nikestore.com.hk/product/%s/detail.htm?pdpRecommend=false&preSkuCode=" % skuCodeDialog
	url = "http://www.nikestore.com.hk/product/fair/WT7vXzY9.htm?pdpRecommend=false&preSkuCode="
	resp = requests.get(url=url, allow_redirects=False)
	if resp.status_code == 200:
		print 'Exists!!'
		has_upc = False
		body = url
		try:
			tree = lxml.html.fromstring(resp.text)
			for li in tree.cssselect(".select-box-size li"):
				has_upc = True
				size = re.sub(r'\W+', '', li.text_content())
				upc = li.attrib["currupc"]
				if size == "95":
					new_item = "<br /> Size %s, upc code: <span style='color: #ff0000'> %s </span> <br />" % (size, upc)
				else:
					new_item = "<br /> Size %s, upc code: %s <br />" % (size, upc)
				body = body + new_item
				pass
		except Exception, e:
			print 'Fail!!'
			if body:
				pprint(body)
				pass
			traceback.print_exc()
		finally:
			pass
		body = body + SPECIAL_MSG
		if has_upc:
			send_simple_email("", "Your Nike's Link", body)
			#send_simple_email("", "Your Nike's Link", body)
			print body
			return False
		else:
			return True
		pass
	else:
		print 'Not exists'
		#print resp.headers["location"]
		return True
	resp.close()
	pass


def start_process():
	counter = 10 #loop for 5 minute * 12 * 64 hours
	keep_request = True
	while keep_request and counter > 0:
		keep_request = keep_request_page()
		counter = counter - 1
		time.sleep(600) #sleep for 60 seconds
		print 'Still have %s times to go' % counter
		sys.stdout.flush()
	pass

if __name__ == "__main__":
	start_process()