function copyCode(){

const code = document.getElementById("inviteCode").innerText;

navigator.clipboard.writeText(code);

alert("초대코드가 복사되었습니다.");
}
