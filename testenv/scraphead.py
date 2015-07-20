import requests
import time
import sys
import datetime

#skuCodeDialog = "768929-623"
def keep_request_page():
	print 'Requesting: %s' % datetime.datetime.now()
	#return True
	skuCodeDialog = "768861-601"
	url = "http://www.nikestore.com.hk/product/%s/detail.htm?pdpRecommend=false&preSkuCode=" % skuCodeDialog
	resp = requests.get(url=url, allow_redirects=False)
	if resp.status_code == 200:
		print 'Exists!!'
		print url
		return False
		pass
	else:
		print 'Not exists'
		#print resp.headers["location"]
		return True
	resp.close()
	pass


def start_process():
	counter = 1200 #loop for 1 minute * 60 * 20 hours
	keep_request = True
	while keep_request and counter > 0:
		keep_request = keep_request_page()
		counter = counter - 1
		time.sleep(2) #sleep for 60 seconds
		print 'Still have %s times to go' % counter
		sys.stdout.flush()
	pass

if __name__ == "__main__":
	start_process()