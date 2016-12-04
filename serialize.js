$(function() {
  var update = function() {
    var formData = $('form').serializeArray();
    var obj = {};
    $(formData).each(function(n,i){
      obj[i.name] = i.value;
    });
    $('#obj').text(
      JSON.stringify(obj)
    );
    $('#serializearray').text(
      JSON.stringify($('form').serializeArray())
    );
    $('#serialize').text(
      JSON.stringify($('form').serialize())
    );
  };
  update();

  $('form').change(update);
})
