import { INoAuthUser, IUser } from "../services/reducers/usersSlice";

export const handleToElementScroll = (el: any) => {
  if (el) {
    el?.scrollIntoView({ behavior: "smooth" });
  }
};

export const createUserInents = (userData: IUser | INoAuthUser) => {
  const user = [];
  for (let key in userData) {
    switch (key) {
      case "name":
        user.push({
          lable: "Имя:",
          value: userData[key as keyof typeof userData],
        });
        break;
      case "surname":
        user.push({
          lable: "Фамилия:",
          value: userData[key as keyof typeof userData],
        });
        break;
      case "email":
        user.push({
          lable: "E-mail:",
          value: userData[key as keyof typeof userData],
        });
        break;
      case "tel":
        user.push({
          lable: "Тел:",
          value: userData[key as keyof typeof userData],
        });
        break;
      default:
        break;
    }
  }
  return user;
};

export const createUserAddress = (userData: IUser | INoAuthUser) => {
  const user = [];
  for (let key in userData) {
    switch (key) {
      case "city":
        user.push({
          lable: "Улица:",
          value: userData[key as keyof typeof userData],
        });
        break;
      case "street":
        user.push({
          lable: "Адрес:",
          value: userData[key as keyof typeof userData],
        });
        break;
      default:
        break;
    }
  }
  return user;
};
