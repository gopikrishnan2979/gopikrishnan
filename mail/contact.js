var text;

function namecheck() {
  let name = document.getElementById("name").value;
  let nm = null;
  nm = name.trim();
  // var letters = /^[A-Za-z]+$/;
  var spc = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+[A-Za-z]*$/;
  document.getElementById("name").value = nm;
  if (nm == "" || name == null || !isNaN(nm[0]) || nm.match(spc)) {
    text = "Please Enter valid Name";
    help_block1.innerHTML = text;
    return false;
  } else {
    help_block1.innerHTML = "";
    return true;
  }
}

function emailcheck() {
  var val = document.getElementById("email").value;
  var v = null;
  v = val.trim();
  document.getElementById("email").value = v;
  if (
    v == "" ||
    val == null ||
    !isNaN(v[0]) ||
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)
  ) {
    text = "Please Enter valid Email";
    help_block2.innerHTML = text;
    return false;
  } else {
    help_block2.innerHTML = "";
    return true;
  }
}

function msgcheck() {
  var val = document.getElementById("message").value;
  var v = null;
  v = val.trim();
  document.getElementById("message").value = v;
  var n = v.length;

  if (v == "" || val == null || n <= 20) {
    text = "Please Enter More Than 20 Characters";
    help_block5.innerHTML = text;
    return false;
  } else {
    help_block5.innerHTML = "";
    return true;
  }
}

function phncheck() {
  var phone = document.getElementById("phone").value;

  if (isNaN(phone) || phone.length != 10) {
    text = "Please Enter valid Phone Number";
    help_block4.innerHTML = text;
    return false;
  } else {
    help_block4.innerHTML = "";
    return true;
  }
}