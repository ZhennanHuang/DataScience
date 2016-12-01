using MongoDB.Driver;
using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MongoDB.Driver.Builders;
using MongoDB.Driver.GridFS;
using MongoDB.Driver.Linq;

namespace Demo.Models
{
    public class MongoDBController : Controller{

        
        // GET: MongoDB
        public ActionResult Index()
        {
            
            return View();
        }
        //public ActionResult 
        public void MgDB()
        {
            
            string connection = "mongodb://COMP6235:wkbbsdh8oDY2@svm-hf1g10-comp6235-temp.ecs.soton.ac.uk:27017";

        }
    }
    
}