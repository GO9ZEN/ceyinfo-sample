"use server";

import Database from "better-sqlite3";

const maindbFileName = "app.db";

/////////////////////////////////////////////////////////////
export const getStaffList = async () => {
  const db = new Database(maindbFileName);
  db.pragma("journal_mode = WAL");

  const res = db.prepare("SELECT * FROM staff").all();

  db.close();

  return Promise.resolve({
    success: true,
    msg: "All Data Displayedxxxxxx",
    data: res,
  });
};

/////////////////////////////////////////////////////////////
export const getStaff = async (id: number) => {
  const db = new Database(maindbFileName);
  db.pragma("journal_mode = WAL");

  const res = db.prepare("SELECT * FROM staff WHERE id = ?").get(id);

  db.close();

  return Promise.resolve({
    success: true,
    msg: "All Data Displayed",
    data: res,
  });
};

/////////////////////////////////////////////////////////////
export const insertStaff = async (data: any) => {
  const db = new Database(maindbFileName);
  db.pragma("journal_mode = WAL");

  //const sqlParts = GetInsertSqliteStatement(configurationSchema,data) insertStatementMain

  //main table
  const stmt = db.prepare(
    "INSERT INTO staff (name, username, nic, contracttype, role, password, confirmpassword) VALUES (?, ?, ?, ?, ?, ?, ?)"
  );

  // contactno, nic, contracttype, role, password, confirmpassword
  // ?, ?, ?, ?, ?, ?

  const info = stmt.run(
    data.name,
    data.username,
    // data.contactno,
    data.nic,
    data.contracttype,
    data.role,
    data.password,
    data.confirmpassword
  );

  // const q= await  new Promise<true>((resolve)=> setTimeout(()=> resolve(true),3000  ))

  db.close();
  //const stmt = db.prepare('INSERT INTO cats (name, age) VALUES (?, ?)');
  if (info.changes == 1) {
    return Promise.resolve({
      success: true,
      msg: "Data Saved",
      lastInsertRowid: info.lastInsertRowid,
    });
  } else {
    return Promise.reject({ success: false, msg: "Insert failed" });
  }
};

/////////////////////////////////////////////////////////////
export const deleteStaffId = async () => {
  const db = new Database(maindbFileName);
  db.pragma("journal_mode = WAL");

  const res = db.prepare("SELECT * FROM staff").all();

  db.close();

  return Promise.resolve({
    success: true,
    msg: "All Data Displayed",
    data: res,
  });
};
