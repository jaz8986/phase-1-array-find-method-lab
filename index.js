
function superbowlWin (record) {
     let win = record.find(singleRecord => singleRecord.result === 'W')
     if (win.year === Number) {
        return win.year
     } else {
        return undefined
     }
      
    }

