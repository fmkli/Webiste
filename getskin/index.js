//一坨屎山
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
        document.getElementById('zbuse').innerHTML = '皮肤头像<br><img src="' + data1.data.player.avatar + '"><br><img src="https://crafatar.com/renders/body/' + data1.data.player.id + '"><br>UUID：' + data1.data.player.id
        document.getElementById('skin').innerHTML= '<a href="https://crafatar.com/skins/' + data1.data.player.id + '">皮肤下载点这！</a>'
console.log('2')
$.ajax({
	type: "get",
	url: 'https://crafatar.com/capes/' + data1.data.player.id,
	success: function(data2){
		document.getElementById('cape').innerHTML = '<a href="https://crafatar.com/capes/'  + data1.data.player.id + '">此玩家有披风，点我查看</a>'
console.log('2')

	},
    error : function(){
        document.getElementById('cape').innerText = "玩家可能并未穿着披风（接口错误）"

    }
});
	},
    error : function(){
        document.getElementById('check').innerText = "错误或者不存在"

    }
});


}
