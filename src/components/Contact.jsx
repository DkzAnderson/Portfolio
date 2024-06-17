import React from 'react'

export const Contact = () => {

  const mailToSend = 'martinez.anderson.0014@gmail.com'

  const styles = {
    main : 'flex flex-col gap-10 w-full my-16 items-center',
    title : 'mt-10 text-3xl text-sky-400',
    form : 'flex w-full max-w-[700px] sm:grid grid-cols-2 gap-x-10 flex-col rounded gap-5',
    inputsBox: 'flex flex-col w-full gap-2',
    inputs: 'p-2 bg-transparent text-white outline-none border-b rounded-sm focus:border-none focus:outline-sky-500',
    txtArea: 'bg-transparent sm:col-start-2 sm:row-start-1 sm:row-span-2 text-white p-2 border rounded-sm min-h-60 outline-none focus:border-none focus:outline-sky-500',
    submit : 'sm:row-start-2 py-2 duration-500 text-3xl bg-sky-500 text-white rounded-sm font-bold cursor-pointer hover:bg-green-600 active:bg-red-700'
  }


  return (
    <section className={styles.main} id='contact'>
      <h2 className={styles.title}>
        Contactame
      </h2>

      <form action={`mailto:${mailToSend}`}
        className={styles.form}
      >
        <div className={styles.inputsBox}>
          <input className={styles.inputs} type="text" placeholder='Nombre' />
          <input className={styles.inputs} type="text" placeholder='Apellidos' />
          <input className={styles.inputs} type="text" placeholder='Email' />
        </div>
        <textarea className={styles.txtArea} name="" placeholder='Motivo de contacto'/>
        <input className={styles.submit} type="submit" value={"Enviar"} placeholder='Nombre'/>
      </form>
    </section>
  )
}
