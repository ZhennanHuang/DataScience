
from pymongo import MongoClient
from decimal import Decimal
import json

def cal_update(listByQ):

	for qIndex in listByQ:
		qData = listByQ[qIndex]
		for i in range(14):
			percPpuCha = 0.0
			if qData[i]['ppu'] :
				currPpu = float(qData[i]['ppu'])
				if currPpu != 0:
					if i>1:
						if qData[i-1]['purchase'] and qData[i-1]['expense']:
							lastPpu = float(qData[i-1]['ppu'])
							if lastPpu != 0:
								percPpuCha = (currPpu - lastPpu)/lastPpu*100
					res = coll.update_one({"category":qData[i]['category'],"year":qData[i]['year']
					,"quintile":qData[i]['quintile']},{
						"$set":{
							"ppu_percentage_change":percPpuCha
						}
						}
					)
			else:
				res = coll.update_one({"category":qData[i]['category'],"year":qData[i]['year']
					,"quintile":qData[i]['quintile']},{
					"$set":{
						"ppu_percentage_change":0.0
					}
					}
				)
#  ----------------

client = MongoClient("mongodb://localhost")
	# 'mongodb://localhost:27017')
db = client.expenditure
coll = db.expenditure_v3

cursor = coll.find({}).sort([['category',1],['quintile',1],['year',1]])
cursorCount = cursor.count()
print(cursorCount)
dataByQ = []
quintile = 1
data = []
listByQ = {}
first = 1
item_list = list(cursor)
item_list_size = len(item_list)
for index,doc in enumerate(item_list):
	if first == 1:
		cat = doc['category']
		first = first+1
	
	if cat == doc['category']:
		if doc['quintile'] == quintile:
			data.append(doc)
		else:
			listByQ[quintile] = data
			quintile = quintile + 1
			data =[]
			data.append(doc)
	else: 
		listByQ[quintile] = data
		cat = doc['category']
		cal_update(listByQ)
		if index<item_list_size-1:
			data = []
			data.append(doc)
			quintile = 1

listByQ[quintile] = data
cat = doc['category']
cal_update(listByQ)	
	
