$(function() {
    var html = "";
    html = `<div class="container-fluid p-0">
  <div class="my_a1">
      <a href="#">
          <img src="img/shouye.png" alt="" />
      </a>
      <ul class="my_dhl nav p-0 m-0 ">
          <li class="nav-item my_sy">
              <a href="#" class="nav-link">首页</a>
          </li>
          <li class="nav-item">
              <a href="#" class="nav-link">分类</a>
          </li>
          <li class="nav-item">
              <a href="#" class="nav-link">排行榜</a>
          </li>
          <li class="nav-item">
              <a href="#" class="nav-link">APP下载</a>
          </li>
          <li class="nav-item">
              <a href="#" class="nav-link">我要投稿</a>
          </li>
          <li class="nav-item">
              <a href="#" class="nav-link ">
                  <img src="img/2.png" alt="" /> 条漫大赛
              </a>
          </li>
          <li class="my_text">
              <input type="text" placeholder="搜索作品、作者名" />
              <a href="#">
                  <img class="my_ssk" src="img/ssk.png" alt="" />
              </a>
          </li>
          <li class="my_logon pr-3">
              <a href="logon.html">登录</a>
              <span>|</span>
              <a href="register.html">注册</a>
          </li>
      </ul>
  </div>
</div>`
    $("header").append(html);
})