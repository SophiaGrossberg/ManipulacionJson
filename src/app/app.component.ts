import { Component, OnInit } from '@angular/core';
import { Usuario } from './Models/Usuario.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  userId=1;
  userData={
    name:"",
    email:""
  }
  
  constructor (private userService: UserService){}

  updateUser(){
      this.userService.updateUser(this.userId, this.userData).subscribe(response => {
          console.log('Usuario Actualizado')
      })
  }
  

  usuarios: Usuario[] = []; 
  nuevousuario: Usuario = { nombre: '', email: '', empresa: '' };  // Inicializar el objeto Usuario

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.obtenerUsuario();

  }

obtenerUsuario(){
  this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe(data => {
    this.usuarios= data.map(user => ({

      nombre: user.name,
      email: user.email,
      empresa: user.company.name

    }));
  });
}

agregarUsuario(){

  const body = {
    name: this.nuevousuario.nombre,
    email: this.nuevousuario.email,
    company: {
      name:this.nuevousuario.empresa
    }
  }

this.http.post('https://jsonplaceholder.typicode.com/users',body).subscribe(response => {

  console.log('Usuario agregado',response);
  this.usuarios.push(this.nuevousuario);
  this.nuevousuario = {nombre: '', email: '', empresa: ''}

})

}



}



