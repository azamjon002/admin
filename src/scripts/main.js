function setRegionToHtml(){
  for (const viloyatNomi in uzbekistanRegions) {
    let accordion= document.getElementById("accordion-nested-parent");
  
    const region = uzbekistanRegions[viloyatNomi];
    let tumanlar = "";
    for (const tumanNomi in region.districts) {
      const tuman = region.districts[tumanNomi];
  
      tumanlar += tuman_function(tuman.id,tuman.name,region.id, tuman.mahallas);
    }
    accordion.innerHTML += viloyat(region.id,region.name,tumanlar);
  }
}

setRegionToHtml()


function addNewRegion(){
  let region_name = document.querySelector('#region_name').value
  let tuman_1 = document.querySelector('#tuman_1').value
  let tuman_2 = document.querySelector('#tuman_2').value


  let accordion= document.getElementById("accordion-nested-parent");
  let tumanlar = "";

  tumanlar += tuman_function(tuman_1,`${region_name}_${tuman_1}_01`,region_name, ['an', 'sa']);
  tumanlar += tuman_function(tuman_2,`${region_name}_${tuman_2}_02`,region_name, ['sa', 'sa']);

  console.log(tumanlar)
  
  accordion.innerHTML += viloyat(region_name,region_name,tumanlar);


  // uzbekistanRegions[region_name] = {
  //   id: region_name,
  //   name: region_name,
  //   districts: {}
  // }

  // uzbekistanRegions[region_name].districts[tuman_1] = {
  //   id: `${region_name}_${tuman_1}_01`,
  //   name: tuman_1,
  //   mahallas: []
  // };
  
  // uzbekistanRegions[region_name].districts[tuman_2] = {
  //   id: `${region_name}_${tuman_2}_01`,
  //   name: tuman_2,
  //   mahallas: []
  // };

}