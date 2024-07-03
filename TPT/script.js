function changeContent(buttonId) {
    const blockspreview = document.getElementById('blocks-preview');
    const blockstitle = document.getElementById('blocks-title');
    const blocksinfo = document.getElementById('blocks-info');
    const itemspreview = document.getElementById('items-preview');
    const itemstitle = document.getElementById('items-title');
    const itemsinfo = document.getElementById('items-info');
    const vis = document.getElementById('canvas-vis');
    const link = document.getElementById('canvas-link');
    if (buttonId == 'powdered_snow') {
        blockspreview.src = 'pack _preview/powdered_snow.gif';
        blockstitle.textContent = 'Visible Powdered Snow';
        blocksinfo.textContent = '- This change makes powdered snow more visible by increasing its contrast and saturation.';
        vis.src = 'pack_icons/powdered_snow.png'
        link.href = 'links/blocks/Visible Powdered Snow.mcpack';
    } else if (buttonId == 'glass') {
        blockspreview.src = 'pack _preview/glass.png';
        blockstitle.textContent = 'Borderless Glass';
        blocksinfo.textContent = '- This simple change removes the borders from glass blocks and give them a sleek and seamless look.';
        vis.src = 'pack_icons/glass.png'
        link.href = 'links/blocks/Borderless Glass.mcpack';
    } else if (buttonId == 'sword') {
        itemspreview.src = 'pack _preview/none.png';
        itemstitle.textContent = 'Shorter Blades';
        itemsinfo.textContent = '- This small change makes sword blades shorter which lessens the way they hinder the players vision.';
        vis.src = 'pack_icons/sword.png'
        link.href = 'links/items/Shorter Blades.mcpack';
    } else if (buttonId == 'wooden_sword') {
        itemspreview.src = 'pack _preview/wooden_tools.gif';
        itemstitle.textContent = 'Stylized Wooden Tools';
        itemsinfo.textContent = '- This small alteration makes the wooden tools appear weaker than before.';
        vis.src = 'pack_icons/wooden_tools.png'
        link.href = 'links/items/Stylized Wooden Tools.mcpack';
    } else if (buttonId == 'enchanted_books') {
        itemspreview.src = 'pack _preview/none.png';
        itemstitle.textContent = 'Stylized Enchanted Books';
        itemsinfo.textContent = '- This simple change gives the enchanted books a fresh update by changing its color and thickness.';
        vis.src = 'pack_icons/enchanted_books.png'
        link.href = 'links/items/Stylized Enchanted Books.mcpack';
    }
  }