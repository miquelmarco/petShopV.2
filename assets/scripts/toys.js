let { createApp } = Vue

let app = createApp({
    data() {
        return {
            data: [],
            catJugueteria: [],
            searchInput: '',
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
            }).catch(error => console.log(error))
    },
    computed: {
        filtroSearch(){
            this.filtrados = this.catJugueteria.filter(prod => prod.producto.toLowerCase().includes(this.searchInput.toLowerCase()))
        }
    }
})
app.mount('#app')