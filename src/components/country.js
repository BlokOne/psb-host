const country = document.querySelectorAll('.offer__country')
const countries = document.querySelector('.offer__countries')


if (country && countries) {
   countries.addEventListener("click", (e) => {
      country.forEach(item => item.classList.remove('active'))
      e.target.classList.add('active')
   })
}
