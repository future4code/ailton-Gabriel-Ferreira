function calculaNota(ex, p1, p2) {
    // Escreva seu código aqui
    
    let multinotas = ex*1 + p1*2 + p2*3
    let multidiv = 1+2+3
    let notatotal = multinotas/multidiv
    
    if (notatotal >= 9) {
      return "A"
    }
    else if (notatotal >= 7.5 && notatotal < 9) {
      return "B"
    }
    else if (notatotal < 7.5 && notatotal >= 6) {
      return "C"
    }
    else {
      return "D"
    }
  }