import React, { Component } from 'react'

export default class Greetings extends Component {

  render() {
    const dt = new Date()
    const horas = dt.getHours()
    let tempoDoDia
    if(horas < 12) {
      tempoDoDia = "m dia"
  } else if(horas >=12 && horas < 17) {
      tempoDoDia = "a tarde"
  } else {
      tempoDoDia = "a noite"
  }
    return (
      <h5>Bo{tempoDoDia} pra ti, Mestre ou Mestra</h5>
    )
  }
}
