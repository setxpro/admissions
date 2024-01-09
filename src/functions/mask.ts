export function cepFormatter(v: string) {
  v = v.replace(/D/g, ""); //Remove tudo o que não é dígito
  v = v.replace(/^(\d{5})(\d)/, "$1-$2"); //Esse é tão fácil que não merece explicações
  return v;
}
export function phoneFormatter(v: string) {
  v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
  v = v.replace(/^(\d\d)(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
  v = v.replace(/(\d{4})(\d)/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
  return v;
}
export function cpfFormatter(v: string) {
  v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
  v = v.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
  v = v.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
  //de novo (para o segundo bloco de números)
  v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); //Coloca um hífen entre o terceiro e o quarto dígitos
  return v;
}


export function rgFormatter(v: string) {
   v = v.replace(/\D/g, ""); // Remove all non-digits
   v = v.replace(/(\d{2})(\d{3})(\d{3})(\d{1})$/, "$1.$2.$3-$4"); // Format RG number
   return v;
 }

export function registroFormatter(v: string) {
  return v.replace(/\D/g, ""); 
}

export function removeNotNumbersFormatter(v: string) {
  return v.replace(/\D/g, ""); 
}

export function replaceDDD(numeroCelular: string) {
  // Remove o código do país "55", se estiver presente
  if (numeroCelular.startsWith("55")) {
    numeroCelular = numeroCelular.substring(2);
  }

  // Verifica se o número de celular tem pelo menos 10 dígitos
  if (numeroCelular.length < 10) {
    throw new Error("O número de celular é inválido.");
  }

  // Extrai os primeiros dígitos correspondentes ao DDD
  const ddd = numeroCelular.substring(0, 2);
  return ddd;
}

export function removeFormatterAll(formater: string) {
  formater = formater.replace(/\D/g, '');
  return formater;
}

export function findFirstName(fullname: string) {
  // Divide o nome completo em partes separadas por espaço
  const name = fullname.trim().split(' ');

  // Retorna o primeiro elemento do array como o primeiro nome
  return name[0];
}

export function removeDDD(phoneNumber: string) {
  if (phoneNumber.length >= 10) { // Verificar se o número tem pelo menos 10 dígitos
    return phoneNumber.slice(-9); // Remover os 2 primeiros dígitos (DDD) e retornar o restante
  } else {
    return "Número inválido";
  }
}


export function removeFormatCelAndSeparate(phone: string) {
  // Remover todos os caracteres que não sejam dígitos
  const numeros = phone.replace(/\D/g, '');

  // Extrair os primeiros 2 dígitos como o DDD
  const ddd = numeros.substring(0, 2);

  // Remover o DDD do número de phone
  const numero = numeros.substring(2);

  return {
    ddd,
    numero
  };
}


export function formatPhoneNumber(phoneNumber: string) {
  const cleaned = phoneNumber.replace(/\D/g, '');

  if (cleaned.length === 10) {
    const ddd = cleaned.slice(0, 2);
    const part1 = cleaned.slice(2, 3);
    const part2 = cleaned.slice(3, 7);
    const part3 = cleaned.slice(7);

    return `(${ddd}) ${part1 === '9' ? part1 : ''}${part1 !== '9' ? part1 : ''}${part2}-${part3}`;
  } else if (cleaned.length === 11) {
    const ddd = cleaned.slice(0, 2);
    const part1 = cleaned.slice(2, 3);
    const part2 = cleaned.slice(3, 7);
    const part3 = cleaned.slice(7);

    return `(${ddd}) ${part1 === '9' && part1} ${part2}-${part3}`;
  }

  return phoneNumber;
}




export function removeCpfFormat(str: string) {
  return str.replace(".", '').replace(".", '').replace("-", '')
}


