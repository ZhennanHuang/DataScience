using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Demo.Models;
using MongoDB.Driver;
using Demo.Properties;

namespace Demo.Controllers
{
    public class HomeController : Controller
    {
        public MongoDatabase MongoDatabase;
        public MongoCollection Collections;
        // GET: Home
        public HomeController() {
            var mongoClient = new MongoClient("mongodb://localhost"+"datascience");

            //var server = mongoClient.GetServer();
            //MongoDatabase = server.GetDatabase(Settings.Default.DB);
            //var db = mongoClient.GetDatabase(Settings.Default.DB);

            mongoClient.GetServer().Ping();
     
            
        }
        public ActionResult Index()
        {
            Collections = MongoDatabase.GetCollection("uk");
            long count = Collections.Count();
            return null;
        }
        
        [HttpPost]
        public ActionResult charts(DropDownList ddl) {
            if (ddl != null)
                return Json("Success");
            else
                return Json("Error");
        }
    }
}