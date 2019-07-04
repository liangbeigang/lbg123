$(function(){
  $(".normal").mouseenter(function(){
    $this=$(this);
    $this.addClass("d_none").next().removeClass("d_none")
    $this.parent().siblings().find(".normal").removeClass("d_none")
    $this.parent().siblings().find(".hover").addClass("d_none")
    // console.log($this.addClass("d_none").parent().parent().find("#p1"))
    // console.log($this.parent().parent().children().first())
  })
  $(".hover").mouseleave(function(){
    $this=$(this);
    $this.addClass("d_none").prev().removeClass("d_none")
    $this.parent().siblings().find(".hover").addClass("d_none")
    $this.parent().siblings().find(".normal").removeClass("d_none")
    // console.log($this.parent().siblings())
  })
  $(".pxb").mouseleave(function(){
    $this=$(this);
    //  console.log($this.find("#p1"))
    $this.find("#p1").removeClass("d_none").prev().addClass("d_none").parent().siblings().find(".hover").addClass("d_none")
  })
})