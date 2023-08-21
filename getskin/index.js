function checkjava(){
    console.log('开始检测 - 1')
document.getElementById('check').innerText = "检测中"
name2 = document.getElementById("name").value
if (name2 == ""){
    document.getElementById('check').innerText = "请填写JAVA版ID"
}
$.ajax({
	type: "get",
	url: 'https://playerdb.co/api/player/minecraft/' + name2,
	success: function(data1){
		document.getElementById('check').innerText = "正版玩家，名字" + data1.data.player.username
        console.log("1")
        document.getElementById('zbuse').innerHTML = '皮肤头像<br><img src="' + data1.data.player.avatar + '"><br>UUID：' + data1.data.player.id
console.log('2')

	},
    error : function(){
        document.getElementById('check').innerText = "错误或者不存在"

    }
});

}
