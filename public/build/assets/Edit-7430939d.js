import{j as a,a as e,b as i}from"./app-f4dc6020.js";import{A as t}from"./AuthenticatedLayout-b9a9a6f2.js";import o from"./DeleteUserForm-74aa07c8.js";import l from"./UpdatePasswordForm-c8a960e1.js";import d from"./UpdateProfileInformationForm-00b7afd4.js";import"./ApplicationLogo-dc42f332.js";import"./transition-4333d221.js";import"./TextInput-7c7274f3.js";import"./InputLabel-d741edba.js";import"./PrimaryButton-dd794629.js";function b({auth:s,mustVerifyEmail:m,status:r}){return a(t,{user:s.user,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Profile"}),children:[e(i,{title:"Profile"}),e("div",{className:"py-12",children:a("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6",children:[e("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:e(d,{mustVerifyEmail:m,status:r,className:"max-w-xl"})}),e("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:e(l,{className:"max-w-xl"})}),e("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:e(o,{className:"max-w-xl"})})]})})]})}export{b as default};