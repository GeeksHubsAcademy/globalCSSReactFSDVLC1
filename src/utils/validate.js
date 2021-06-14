

export const validate = (datos) => {
    for(let campo in datos){
        switch(campo) {
            case 'nombre':
            case 'name':
            case 'fullname':
            case 'nom':
            case 'username':

                if(datos[campo] === ''){
                    return "El campo nombre no puede estar vacío";
                }

                if (
                    !/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(datos[campo])
                  ) {
                    return "El nombre solo puede contener letras";
                  }
                  break;

            
            case "correo":
            case "mail":
            case "e-mail":
            case "correoelectronico":
            case "email":
              // eslint-disable-next-line
              if (datos[campo] === "") {
                return "El campo email no puede estar vacío";
              }
            
              if (
                !/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/.test(
                  datos[campo]
                )
              ) {
                return "El email introducido no es correcto";
              }
            
              break;

        }
    }
};