use std::ffi::CStr;
use std::process::Command;

use libc::c_char;

#[no_mangle]
pub extern "C" fn spawn(s: *const c_char) {
  let c_str = unsafe {
    assert!(!s.is_null());
    CStr::from_ptr(s)
  };

  let r_str = c_str.to_str().expect("Should be a valid string");

  let (cmd, arg) = r_str
    .split_once(" ")
    .expect("Supplied string is in the wrong format");

  let args = arg.split(" ").collect::<Vec<_>>();

  Command::new(cmd)
    .args(args)
    .spawn()
    .expect(format!("{cmd} failed to start").as_str());
}
