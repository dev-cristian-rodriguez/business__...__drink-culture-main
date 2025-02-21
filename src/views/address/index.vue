<script setup lang="ts">
// import vSelect from 'vue-select'
</script>

<template>
  <main :class="$style['adress-container']">
    <h1>Agregar domicilio</h1>

    <section :class="$style['form-container']">
      <aside :class="[$style['form-container__child-block']]">
        <label for="full-name"> Nombre y apellido </label>
        <input type="text" id="full-name" name="full-name" />
      </aside>

      <aside :class="[$style['form-container__child-block']]">
        <label> Departamento </label>
        <!-- <component :is="vSelect" :options="['department 1', 'department 2', 'department 3']"></component> -->
        <!-- <v-select :options="['Canada', 'United States']"></v-select> -->
        <select>
          <option value="">Seleccionar</option>
          <option value="1">Departamento 1</option>
          <option value="2">Departamento 2</option>
          <option value="3">Departamento 3</option>
        </select>
      </aside>

      <aside :class="[$style['form-container__child-block']]">
        <label> Municipio, capital o localidad </label>
        <select>
          <option value="">Seleccionar</option>
          <option value="1">City 1</option>
          <option value="2">City 2</option>
          <option value="3">City 3</option>
        </select>
      </aside>

      <aside :class="[$style['form-container__child-block']]">
        <label for="neighborhood"> Barrio </label>
        <input type="text" id="neighborhood" name="neighborhood" />
      </aside>

      <aside :class="[$style['form-container__child-block']]">
        <label> Tipo de calle </label>
        <select>
          <option value="">Seleccionar</option>
          <option value="1">Carrera</option>
          <option value="2">Avenida</option>
          <option value="3">Manzana</option>
        </select>
      </aside>

      <aside :class="[$style['form-container__child-block']]">
        <label for="street"> Calle </label>
        <input type="text" id="street" name="street" />
      </aside>

      <aside :class="[$style['form-container__child-block']]">
        <label for="direction-number"> Número </label>
        <input type="text" id="direction-number" name="direction-number" />
      </aside>

      <aside :class="[$style['form-container__child-block']]">
        <label for="contact-number"> Teléfono de contacto </label>
        <input type="text" id="contact-number" name="contact-number" />
      </aside>

      <aside :class="[$style['form-container__child-block']]">
        <label for="additional-information"> Información adicional </label>
        <textarea id="additional-information" name="additional-information"></textarea>
      </aside>
    </section>
  </main>
</template>

<style module>
.adress-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
  margin-bottom: 35px;
}

.adress-container h1 {
  font-weight: 600;
  font-size: 22px;
  margin-top: 15px;
  margin-bottom: 0px;
}

.form-container {
  background: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin-top: 20px;
  gap: 30px;
  padding: 35px 30px;
  border-radius: 6px;
}

.form-container__child-block {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.form-container__child-block label {
  color: #1a1a32;
  margin-left: 3px;
  font-size: 13px;
  font-weight: 600;
}

.form-container__child-block input {
  font-family: 'Inter', sans-serif;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 400;
  border: 1px solid rgb(203, 203, 203);
  padding: 10px 6px;
  outline: none;
}

.form-container__child-block select {
  font-family: 'Inter', sans-serif;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 400;
  color: #1a1a32;
  border: 1px solid rgb(203, 203, 203);
  padding: 10px 6px;
  outline: none;
}

.form-container__child-block textarea {
  font-family: 'Inter', sans-serif;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 400;
  border: 1px solid rgb(203, 203, 203);
  padding: 10px 6px;
  height: 80px;
  min-height: 50px;
  max-height: 120px;
  outline: none;
}
</style>
