$(function () {
  data.unshift({ name: 'TOTAL', families: 0, families_childs: 0, childs: 0, date: '' })
  $.each(data, function (key, item) {
    data[0].childs += item.childs
    data[0].families += item.families
    data[0].families_childs += item.families_childs
  })

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

  $('h2').html(item.name)
  $('#families').find('span').html(item.families + ' ')
  $('#families-childs').find('span').html(item.families_childs + ' ')
  $('#childs').find('span').html(item.childs + ' ')
  $('#percentage').html((item.childs / data[0].childs * 100).toFixed(2))
  $('#date').find('span').html(item.date)
}