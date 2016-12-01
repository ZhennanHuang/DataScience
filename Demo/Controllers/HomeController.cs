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
            var client = new MongoClient(ConfigurationManager.AppSettings["connectionString"]);
            MongoServer server = client.GetServer();
            MongoDatabase db = server.GetDatabase("expenditure");
            Collections = db.GetCollection<food>("expenditure");
            long a = Collections.Count();
            foreach (food food in Collections.FindAllAs<food>())
            {
                string id = food._id.ToString();
                int q = food.quintile;
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