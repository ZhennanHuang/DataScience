using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Demo.Models;
using MongoDB.Driver;
using Demo.Properties;
using System.Configuration;

namespace Demo.Controllers
{
    public class HomeController : Controller
    {
        public MongoDatabase MongoDatabase;
        public MongoCollection Collections;
        // GET: Home
        public HomeController() {
            //var client = new MongoClient("mongodb://localhost");
            //var db = client.GetDatabase("datascience");

            //var collection = db.ListCollections().ToList();
            //Collections = db.GetCollection<>("col");
            var client = new MongoClient(ConfigurationManager.AppSettings["connectionString"]);
            MongoServer server = client.GetServer();
            MongoDatabase db = server.GetDatabase("test");
            MongoCollection<person> Persons = db.GetCollection<person>("persons");
            long a = Persons.Count();
            
            foreach (person Aperson in Persons.FindAll())
            {
                string name = Aperson.Name;
                
            }


        }
        public ActionResult Index()
        {
            Collections = MongoDatabase.GetCollection("col");
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