let images = [
    "https://lh3.googleusercontent.com/_mothnvw-dZRi7sVFutIHxLIJkC_o-4-6rznkoobfVN1-yGng4SVXkNOhj7VpCHS22NxtKqMnnzx1JYx1f5ahww0GFzxNNzpRlosW4NoLKpY4hDWT560g8XgtknhKuDFpxTZaukEPw=w2400",
    "https://lh3.googleusercontent.com/mdVwtqs-K-ktMiIyc6ly1LoW31m47lcjpxybaSRD8uTKrwjHX2FimCPdsWQK1Ipfyb2iHLGvZjEcTpnTFZVacJDEMslyVrVJiw7fzKsz349ng87Fj2TTrkcF0MskhuGA8bnKXVNjBg=w2400",
    "https://lh3.googleusercontent.com/kSAGsTo0TjhUhKimsF-f6_-Z_Rg3BXaK7FW8TLd02iaYKtMdlJa2mUQu-nWtp-nsBRMOxJc_sSqwifESEtNsJCK_JkMpogDnFM6a_AvS4bxszirOGAfNrBiL3w-6Eae3P48LPvtIfw=w2400",
    "https://lh3.googleusercontent.com/FRdKoAq-ktYKqEK-8497Mm-XQoH7cDFEIxAOH6rpyElr0WeArcUrI3yGg-f5SgXSLoG2bjsLGTBJl2znFnodHzHIjnTpsKOiVjRHoNKFVbdD0WqhmmR9kgRu6zR8o0nGMZULUc2rtQ=w2400",
    "https://lh3.googleusercontent.com/VJK8FL8UiPOTftJZM-vUrfF6I91tD6-Y-enbjPO9uqrITuUXoJ3znITl1gjSA3HOBnc3YAIya4J_fdayOZuuQxOElJMLApB_Podkiy9ANunTXbJ431wdxzGbvZezO1Ti25GSUjE6wQ=w2400",
    "https://lh3.googleusercontent.com/zTMoIGX9TQwQ1TeWwTKYbxA7YAqnzsib0BuuCpVrgLdB221XPP7wDlqnpm1XsRQkJXvhcti9PAfB4r_KZskjb56DFihjHQW9S6-KsZf9QEJlfS9moKvTL9ZsDtQtP0mUfqTET22sQw=w2400"
];

let num = 0;


//Next() and prev() functions for Pic Slider
function next(){
    let slider = document.getElementById("slider");
    num++;
    if(num >= images.length){
        num = 0;
    }
    slider.src=images[num];
}

function prev(){
    let slider = document.getElementById("slider");
    num--;
    if(num<0){
        num = images.length-1;
    }
    slider.src=images[num];
}

