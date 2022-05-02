
const host = 'luby-timesheet.azurewebsites.net'
const path = '/Worksheet/ReadOnly'

if (window.location.host == host && window.location.pathname == path) {
  $( document ).ready(function() {
    console.log(2)
    let tbWorksheetIds = []
    console.log($('#tbWorksheet'))
    $('#tbWorksheet').DataTable().rows().every( function ( rowIdx, tableLoop, rowLoop ) {
      var data = this.data()
      if (
        data[8].search('title="Aprovada"') != -1 ||
        data[8].search('title="Pré-Aprovada"') != -1 
      ) {
        tbWorksheetIds.push(rowIdx)
      }
    })
    $('#tbWorksheet').DataTable().rows(tbWorksheetIds).remove().draw()
    
    $('#tbWorksheet').DataTable().column(4).order( 'asc' ).draw()
    $('#tbWorksheet').DataTable().column(3).order( 'asc' ).draw()
  
    $($('#tbWorksheet').DataTable().row().node()).find( ".evaluate" ).click()
  })
}


