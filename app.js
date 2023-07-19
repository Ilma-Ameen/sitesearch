var company = document.getElementById('company');
var model = document.getElementById('model');
var box = document.getElementById('renderBox');

function mobRender(){
    var mobiles = {
        apple: {
            iphone11:{
                name: "Iphone11",
                camera: "12 MP, f/1.8, 26mm (wide), 1/2.55",
                ram:"128GB 8GB RAM"
            },
            iphone12:{
                name: "Iphone12",
                camera: "12 MP, f/1.8, 26mm (wide), 1/2.55",
                ram:"256GB 12 RAM"
            },
            iphone13:{
                name: "Iphone13",
                camera: "12 MP, f/2.4, 120˚, 13mm (ultrawide)",
                ram:"512GB 16GB RAM"
            }
        },
        samsung: {
            samsunggalaxyS21Ultra:{
                name: "samsunggalaxyS21Ultra",
                camera: "108MP Wide 12MP Ultra wide",
                ram:"256 GB"
            },
            samsungalaxyS22Ultra:{
                name: "samsunggalaxyS21Ultra",
                camera: "10 MP, f/2.2, 26mm (wide)",
                ram:"128GB 8GB RAM"
            },
            samsunggalaxyS23Ultra:{
                name: "samsunggalaxyS21Ultra",
                camera: "12 MP, f/2.2, 26mm (wide)",
                ram:"128GB 8GB RAM"
            }
        },
    }
    var companyVal = company.value;
    var modelVal = model.value;
    var entrypoint = mobiles[companyVal][modelVal];
    box.innerHTML = `
    <div class="row">
            <div class="col-md-6 d-flex">
                <div>
                    <h1 class="display-3">Model ${entrypoint.name}</h1>
                    <h3 class="mb-4 display-5">Specifications</h3>
                    <h1 class="mb-4">camera: ${entrypoint.camera} </h1>
                    <h1 class="mb-4">Ram: ${entrypoint.ram}</h1>
                </div>
            </div>
        </div> 
    `
}