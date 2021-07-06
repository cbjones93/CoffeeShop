

const url = "https://localhost:5001/api/beanvariety/";

let entryElement = document.querySelector(".entryForm")
let applicationElement = document.querySelector(".coffeeShop")

const showBeanEntry = () => {
    entryElement.innerHTML = BeanEntry();
}

const button = document.querySelector("#run-button");
const beanVariety = document.querySelector(".bean-variety");


function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json())
        .then(parsedResponse => {
            console.log("data with user", parsedResponse)
            return parsedResponse;
        })

}

const BeanVarietyList = (allBeans) => {
    let beanHTML = "";
    for (const beanObj of allBeans) {
        beanHTML += BeanVarieties(beanObj)
    }
    return beanHTML;
}

const BeanVarieties = (beanVarieties) => {
    return `
    <h4> ${beanVarieties.id}</h4>
    <div> Name: ${beanVarieties.name} </div>
    <div> Region: ${beanVarieties.region} </div>
    <div> Notes: ${beanVarieties.notes} </div>
    
    `
}

const BeanEntry = () => {
    return `
    <h4> Add A New Bean </h4>
    <div class = "newBean">
    <div>
        <input value=""
        name="name"
        class="newBean_input"
        type="text"
        placeholder ="Name" />
    </div>
    <div>
       <input value=""
       region="region"
       class="newBean_input"
       type="text"
       placeholder ="Region" />
</div>
<div>
    <input value=""
    notes= "notes"
    class="newBean_input"
    type="text"
placeholder ="Notes" />
</div>
    <button id="NewBean_submit"> Save </button>
    <button id="NewBean_cancel">Cancel</button>
    </div>
    `
}


//--------------------- EVENT LISTENERS-------------------------------
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(BeanVarietyList(beanVarieties))
            beanVariety.innerHTML = BeanVarietyList(beanVarieties);
            showBeanEntry();
        })
});

applicationElement.addEventListener("click", event => {
    event.preventDefault();
    if(event.target.id ==="NewBean_submit")
    {
        const beanObj = {
            name:document.querySelector("input[name='name']").value,
            region: document.querySelector("input[region = 'region']").value,
            notes: document.querySelector("input[notes = 'notes']").value
        }
    }
    addBean(beanObj)
})