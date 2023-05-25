let { createApp } = Vue

let app = createApp({
    data() {
        return {
            data: [],
            catFarmacia: [],
            searchInputFarmacy: '',
            filtrados:[]
        }
    },
    created() {
        fetch(`https://mindhub-xj03.onrender.com/api/petshop`)
            .then(res => res.json())
            .then(data => {
                this.data = data
                this.catFarmacia = this.data.filter(card => card.categoria == 'farmacia')
                this.catJugueteria = this.data.filter(card => card.categoria == 'jugueteria')
                console.log(this.catFarmacia)
            }).catch(error => console.log(error))
    },
    computed: {
        filtroSearch(){
            this.filtrados = this.catFarmacia.filter(prod => prod.producto.toLowerCase().includes(this.searchInputFarmacy.toLowerCase()))
        }
    }
})
app.mount('#app')