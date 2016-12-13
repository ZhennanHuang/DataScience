using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Demo.Models;
using MongoDB.Driver;
using Demo.Properties;
using System.Configuration;
using MongoDB.Bson;
using MongoDB.Driver.Builders;
using MongoDB.Driver.Linq;

namespace Demo.Controllers
{
    public class HomeController : Controller
    {
        public MongoDatabase MongoDatabase;
        public MongoDB.Driver.MongoCollection Collections;
        // GET: Home
        public HomeController() {
            var client = new MongoClient(ConfigurationManager.AppSettings["connectionString"]);
            //MongoServer server = client.GetServer();
            var db = client.GetDatabase("expenditure");
            var Collections = db.GetCollection<food>("expenditure");
            //var list = Collections.Find<food>(new BsonDocument("year", 2002)).ToList();
            //long a = Collections.Count();
            var List = Collections.Find(x => x.year == 2002).ToList();
            foreach (var f in List) {
                string category = f.category;
                double? ppu = f.ppu;
                double? ppue = f.ppu_percentage_change;
                string unit = f.purchase_units;
            }
        }
        public ActionResult Index()
        {
            long count = Collections.Count();
            food f1 = Collections.FindOneAs<food>();
            
            return View();
        }
        
        [HttpPost]
        public ActionResult charts(DropDownList ddl) {
            if (ddl != null)
                return Json("Success");
            else
                return Json("Error");
        }
        public ActionResult chart() {
            return View();
        }
    }
}