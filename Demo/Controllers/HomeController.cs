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
        //public MongoCollection Collections;

        //// GET: Home
        //public HomeController()
        //{
        //    var client = new MongoClient(ConfigurationManager.AppSettings["connectionString"]);
        //    MongoServer server = client.GetServer();
        //    MongoDatabase db = server.GetDatabase("expenditure");
        //    Collections = db.GetCollection<food>("expenditure");
        //    long a = Collections.Count();

        //    foreach (food food in Collections.FindAllAs<food>())
        //    {
        //        string id = food._id.ToString();
        //        int q = food.quintile;
        //    }
        //}
        public MongoDB.Driver.MongoCollection Collections;
        List<food> foodList = new List<food>();
        // GET: Home
        public HomeController()
        {
            //var client = new MongoClient(ConfigurationManager.AppSettings["connectionString"]);

            //var db = client.GetDatabase("expenditure");
            //var Collections = db.GetCollection<food>("expenditure");

            //var List = Collections.Find(x => x.year == 2002).ToList();
            //foodList = List;
            //foreach (var f in List)
            //{
            //    string category = f.category;
            //    double? ppu = f.ppu;
            //    double? ppue = f.ppu_percentage_change;
            //    string unit = f.purchase_units;
            //}
        }
        public ActionResult Index()
        {
            //long count = Collections.Count();
            //food f1 = Collections.FindOneAs<food>();
            
            return View();
        }
        
        [HttpPost]
        public ActionResult charts(DropDownList ddl) {
            //var json = Collections.FindAllAs<food>().ToList();
            if (ddl != null)
                return Json(foodList.ToJson());
                //return Json(json.ToJson());
            else
                return Json("Error");
        }
        public ActionResult charts() {
            return View();
        }
        public ActionResult readOnly() {
            return View();
        }
    }
}