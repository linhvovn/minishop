var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "db.minishop"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        var initTable = function(script,initData,datas){
            db.run(script,
            (err) => {
                if (err) {
                    // Table already created
                }else if (initData) {
                    var insert = initData;
                    datas.forEach(function(data){
                        db.run(insert,data);
                    });
                }
            });  
        };

        console.log('Connected to the SQLite database.')

        initTable(`CREATE TABLE hinhthucthanhtoan (
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            ten INTEGER NOT NULL,
            chiphicongthem REAL
        );`,`INSERT INTO hinhthucthanhtoan (ten, chiphicongthem) VALUES(?, ?)`,[["Tien Mat",0],["Tra The",0.05]]);
        
        initTable(`CREATE TABLE sanpham (
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            ten TEXT,
            maso TEXT,
            chitiet INTEGER
        );`);

        initTable(`CREATE TABLE banhang (
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            ngay INTEGER,
            thang INTEGER,
            nam INTEGER,
            thanhtoanbang INTEGER,
            CONSTRAINT banhang_FK FOREIGN KEY (thanhtoanbang) REFERENCES hinhthucthanhtoan(id)
        );`);

        initTable(`CREATE TABLE chitietbanhang (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            sanpham INTEGER NOT NULL,
            donhang INTEGER NOT NULL,
            soluong INTEGER,
            gia INTEGER,
            thanhtoanbang INTEGER,
            CONSTRAINT chitietbanhang_FK FOREIGN KEY (sanpham) REFERENCES sanpham(id) ON DELETE CASCADE,
            CONSTRAINT chitietbanhang_FK_1 FOREIGN KEY (donhang) REFERENCES banhang(id) ON DELETE CASCADE,
            CONSTRAINT chitietbanhang_FK_2 FOREIGN KEY (thanhtoanbang) REFERENCES hinhthucthanhtoan(id)
        );`);

        initTable(`CREATE TABLE nhaphang (
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            sanpham INTEGER NOT NULL,
            gia INTEGER DEFAULT 0 NOT NULL,
            ngay INTEGER,
            thang INTEGER,
            nam INTEGER,
            soluong INTEGER DEFAULT 0 NOT NULL,
            thanhtoanbang INTEGER NOT NULL,
            CONSTRAINT nhaphang_FK FOREIGN KEY (sanpham) REFERENCES sanpham(id) ON DELETE CASCADE,
            CONSTRAINT thanhtoanbang_FK FOREIGN KEY (thanhtoanbang) REFERENCES hinhthucthanhtoan(id)
        );`);
       
    }
});


module.exports = db