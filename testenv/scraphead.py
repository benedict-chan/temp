import requests
import time
import sys
import datetime
import smtplib
from pprint import pprint

import lxml.html
import re
import traceback


SPECIAL_MSG = """
<br />
$j.post("/shoppingcart/add", {upc: "00659658169586",count: 1}, function(j) { <br />
    var n = j.shoppingCommand;    <br />
    console.dir(n);   <br />
    omnitureCartAddedHandler("768929-623", "1299");   <br />
});  <br />
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
	skuCodeDialog = "768861-601"
	url = "http://www.nikestore.com.hk/product/%s/detail.htm?pdpRecommend=false&preSkuCode=" % skuCodeDialog
	resp = requests.get(url=url, allow_redirects=False)
	if resp.status_code == 200:
		print 'Exists!!'
		body = url
		body = body + SPECIAL_MSG
		try:
			tree = lxml.html.fromstring(resp.text)
			for li in tree.cssselect(".select-box-size li"):
				size = re.sub(r'\W+', '', li.text_content())
				upc = li.attrib["currupc"]
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
		send_simple_email("", "nikestore", body)
		print body
		return False
		pass
	else:
		print 'Not exists'
		#print resp.headers["location"]
		return True
	resp.close()
	pass


def start_process():
	counter = 12 #loop for 1 minute * 60 * 17 hours
	keep_request = True
	while keep_request and counter > 0:
		keep_request = keep_request_page()
		counter = counter - 1
		time.sleep(5) #sleep for 60 seconds
		print 'Still have %s times to go' % counter
		sys.stdout.flush()
	pass

if __name__ == "__main__":
	start_process()