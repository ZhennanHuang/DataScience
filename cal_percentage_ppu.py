
from pymongo import MongoClient
from decimal import Decimal
import json

def cal_update(listByQ):
    print(listByQ.keys())
    for qIndex in listByQ:
        qData = listByQ[qIndex]
        for i in range(14):
            ppu = 0.0
            percPurCha = 0.0
            percExpCha = 0.0
            if qData[i]['purchase'] and qData[i]['expense']:
                currPurchase = float(qData[i]['purchase'])
                currExprense = float(qData[i]['expense'])
                if currPurchase != 0:
                    ppu = currExprense/currPurchase
                if i>=1:
                    if qData[i-1]['purchase'] and qData[i-1]['expense']:
                        lastPurchase = float(qData[i-1]['purchase'])
                        lastExpense = float(qData[i-1]['expense'])
                        if lastPurchase != 0:
                            percPurCha = (currPurchase - lastPurchase)/lastPurchase*100
                        if lastExpense != 0:
                            percExpCha = (currExprense - lastExpense)/lastExpense*100
                
                res = coll.update_one({"category":qData[i]['category'],"year":qData[i]['year']
                ,"quintile":qData[i]['quintile']},{
                    "$set":{
                        "ppu":ppu,
                        "expense_percentage_change":percExpCha,
                        "purchase_percentage_change":percPurCha
                    }
                    }
                )
            else:
            	
                res = coll.update_one({"category":qData[i]['category'],"year":qData[i]['year']
                    ,"quintile":qData[i]['quintile']},{
                    "$set":{
                        "ppu":0.0,
                        "expense_percentage_change":0.0,
                        "purchase_percentage_change":0.0
                    }
                    }
                )
#  ----------------

client = MongoClient("mongodb://localhost")
coll = client.expenditure.expenditure_v3

# NOTE: quintiles in DB must be set to be integers rather than strings.

cursor = coll.find({}).sort([['category',1],['quintile',1],['year',1]])
cursorCount = cursor.count()
print(cursorCount)
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
            data =[]
            data.append(doc)
            quintile = 1

listByQ[quintile] = data
cat = doc['category']
cal_update(listByQ)
