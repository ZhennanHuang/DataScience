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
using System.IO;
using System.Web.Script.Serialization;

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
        public MongoDB.Driver.IMongoDatabase database;
        List<food> foodList = new List<food>();
        List<Elas> eList = new List<Elas>();
        List<points> pl = new List<points>();
        List<points> pl1 = new List<points>();
        List<points> pl2 = new List<points>();
        List<points> pl3 = new List<points>();
        // GET: Home
        public HomeController()
        {
            var client = new MongoClient(ConfigurationManager.AppSettings["connectionString"]);

            database = client.GetDatabase("expenditure");
            //var Collections = db.GetCollection<food>("expenditure");
        }
        public ActionResult Index()
        {
            //long count = Collections.Count();
            //food f1 = Collections.FindOneAs<food>();
            return View();
        }
        
        [HttpPost]
        public ActionResult charts()
        {
            var sr = new StreamReader(Request.InputStream);
            var stream = sr.ReadToEnd();
            JavaScriptSerializer js = new JavaScriptSerializer();
            var list = js.Deserialize<DropDownList>(stream);
            DropDownList dd = list;

            string collectionName= "elasticity_v4";
            string title1="";
            string title2="";
            string title3="";


            switch (dd.t1) {
                case "All categories": title1 = "All categories"; break;
                default: title1 = dd.t1;title2 = dd.t2;title3 = dd.t3; break;
            }

            getAllData(collectionName, title1, title2, title3);

            int nid = 0;
            pl1 = pl.OrderBy(o => o.Category).ToList();
            pl2 = pl1.OrderBy(o => o.Quintile).ToList();
            for (int i = 0; i < pl.Count(); i++) {
                points temp = pl2.ElementAt(i);
                nid++;
                temp.number = nid;
                pl3.Add(temp);
            }

            if (dd != null)
            {
                return Json(pl3.ToJson());
            }
            else
                return Json("Error");
        }
        public ActionResult readOnly() {
            return View();
        }
        public ActionResult boxplot() {
            return View();
        }
        public void getAllData(string collectionName, string title1, string title2, string title3) {
            var Collections = database.GetCollection<Elas>(collectionName);
            List<Elas> list = null;
            int num = 0;
            if (title1 == "All categories")                                 
            {
                list = Collections.Find(x => x.Subcategory == "").ToList();
                foreach (var f in list)
                {
                    
                    points p = new points();
                    p.Category = f.Category;
                    p.Elasticity = f.Elasticity;
                    p.Quintile = f.Quintile;
                    pl.Add(p);
                    
                }
            }
            else if (title2 == "") {
                list = Collections.Find(x => x.Category == title1).ToList();
                foreach (var f in list)
                {
                    if ((f.Subcategory != "") && (f.Subsubcategory == ""))
                    {
                        num++;
                        points p = new points();
                        p.Category = f.Subcategory;
                        p.Elasticity = f.Elasticity;
                        p.Quintile = f.Quintile;
                        pl.Add(p);
                    }
                }
                if (num == 0)
                {                             //if there is no subcategory.
                    foreach (var f in list)
                    {
                        num++;
                        points p = new points();
                        p.Category = f.Category;
                        p.Elasticity = f.Elasticity;
                        p.Quintile = f.Quintile;
                        pl.Add(p);
                    }
                }
            }
            else if (title3 == "") {
                list = Collections.Find(x => x.Category == title1 && x.Subcategory == title2).ToList();
                foreach (var f in list)
                {
                    if ((f.Subsubcategory != "") && (f.Subsubsubcategory == ""))
                    {
                        num++;
                        points p = new points();
                        p.Category = f.Subsubcategory;
                        p.Elasticity = f.Elasticity;
                        p.Quintile = f.Quintile;
                        pl.Add(p);
                    }
                }
                if (num == 0)                           //if there is no subsubcategory.
                {
                    foreach (var f in list)
                    {
                        num++;
                        points p = new points();
                        p.Category = f.Subcategory;
                        p.Elasticity = f.Elasticity;
                        p.Quintile = f.Quintile;
                        pl.Add(p);
                    }
                }
            }
            else {
                list = Collections.Find(x => x.Category == title1 && x.Subcategory == title2&&x.Subsubcategory == title3).ToList();
                foreach (var f in list)
                {
                        points p = new points();
                        p.Category = f.Subsubcategory;
                        p.Elasticity = f.Elasticity;
                        p.Quintile = f.Quintile;
                        pl.Add(p);
                }
            }
        }
    }
}