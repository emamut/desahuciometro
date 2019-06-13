$(function () {
  console.log('data', data)
  $.each(data, function (key, item) {
    $('.list-group').append('<button class="list-group-item list-group-item-action" data-id="' + key + '">' + item.name + '</button >')
  })

  changeValues(0)

  $('.container').on('click', '.list-group button', function () {
    changeValues($(this).data('id'))
  })
})

function changeValues(id) {
  var item = data[id];
  id++
  $('.list-group button').removeClass('active')
  $('.list-group button:nth-child(' + id + ')').addClass('active')

  $('h1').html(item.name)
  $('#families').find('span').html(item.families + ' ')
  $('#families-childs').find('span').html(item.families_childs + ' ')
  $('#childs').find('span').html(item.childs + ' ')
  $('#date').find('span').html(item.date)
}