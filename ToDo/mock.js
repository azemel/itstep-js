const LINES = [ 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Aliquam non mauris laoreet, lobortis mauris sit amet, ultrices diam.",
    "Pellentesque sit amet ex sollicitudin, euismod est nec, blandit tortor.",
    "In vitae nunc consectetur, ullamcorper risus ac, pulvinar nunc.",
    "Duis porttitor ipsum eget rhoncus dignissim.",
    "Vivamus viverra purus in ex placerat tempor.",
    "Praesent eget tortor sit amet nibh ultricies placerat.",
    "Donec nec justo ut enim rutrum hendrerit.",
    "Integer efficitur turpis non diam convallis, in consectetur mauris interdum.",
    "Aenean a nisl dictum, ornare justo eu, vehicula eros.",
    "Integer a elit ultricies augue aliquam vehicula.",
    "Vestibulum eu est sit amet leo elementum consectetur sed nec diam.",
    "Etiam in ipsum molestie, tincidunt elit id, volutpat velit.",
    "Maecenas ac sem pulvinar, egestas est sit amet, dignissim ante.",
    "Donec quis mi interdum, ornare arcu quis, pellentesque quam.",
    "In quis arcu elementum, convallis mi a, pharetra erat.",
    "Fusce tincidunt lectus vel posuere accumsan.",
    "Maecenas scelerisque erat finibus purus faucibus, et ultrices dolor ultrices.",
    "Nulla sed velit cursus lorem scelerisque finibus ac at erat.",
    "Sed pretium arcu aliquam interdum viverra.",
    "Nam a justo aliquet sem volutpat posuere.",
    "Integer placerat nibh eu sodales imperdiet.",
    "Nam id odio id lectus commodo imperdiet.",
    "In sodales nisi quis augue aliquet finibus.",
    "Aliquam pharetra enim eu consectetur semper.",
    "Praesent ultrices velit id lacus euismod, eget rutrum nulla suscipit.",
    "Pellentesque vel odio a lorem fringilla vestibulum ut ut odio.",
    "Aenean vitae sapien eu tellus consectetur tristique.",
    "Sed ac lectus laoreet, maximus urna vel, scelerisque est.",
    "Fusce et lacus non turpis malesuada sollicitudin ac eu risus.",
    "Fusce sagittis odio ac risus tristique, ac consequat ipsum accumsan.",
    "Phasellus vel nibh consectetur, maximus odio et, tincidunt magna.",
    "Praesent pellentesque massa eget nulla posuere tincidunt.",
    "Curabitur in quam nec magna congue eleifend.",
    "Phasellus vitae tortor consequat, facilisis nibh in, tincidunt augue.",
    "Sed sollicitudin nisi id mi dictum, id fringilla odio volutpat.",
    "Nunc pretium felis gravida nunc mattis consectetur.",
    "Proin vitae nunc sed ipsum laoreet auctor at et ex.",
    "Quisque accumsan lectus vitae metus accumsan lacinia.",
    "Aliquam id lorem a sapien sollicitudin tempus.",
    "Vestibulum eleifend ex nec maximus suscipit.",
    "Cras mattis est sit amet orci commodo interdum ac at turpis.",
    "Integer eget urna sagittis, ullamcorper ante ac, sagittis lacus.",
    "Curabitur luctus massa ac nisl ultrices aliquam.",
    "Proin dictum diam quis eros lobortis, ut posuere erat tincidunt.",
    "Nullam nec sem ac leo finibus consequat.",
    "Cras faucibus sem nec luctus pellentesque.",
    "Aenean fermentum dolor eget risus sagittis efficitur.",
    "Integer pretium tortor sed eros pulvinar, ut gravida lorem lobortis.",
    "Nullam tempus libero at sem lacinia molestie.",
    "Nulla mollis dui quis nisi volutpat dictum.",
    "Pellentesque vel arcu interdum, molestie velit non, convallis nisl.",
    "Praesent at mauris a nibh congue tincidunt.",
    "Vivamus at nibh ornare, tincidunt odio at, mollis urna.",
    "Praesent sit amet magna a quam imperdiet dapibus.",
    "Proin a quam at justo facilisis vehicula.",
    "Curabitur id leo id metus vehicula auctor sit amet sed arcu.",
    "Pellentesque lacinia ante vitae dapibus condimentum.",
    "Sed tempus mauris et nunc ultricies pulvinar.",
    "In vel felis vitae mi convallis iaculis.",
    "Donec aliquam metus semper mollis iaculis.",
    "Suspendisse sed leo hendrerit, tincidunt sem vel, laoreet ligula.",
    "Nullam sit amet neque viverra leo pulvinar cursus.",
    "Duis ut risus at nulla sollicitudin imperdiet semper vitae arcu.",
    "Maecenas commodo urna ac vulputate cursus.",
    "Maecenas in dolor mollis, efficitur nisi a, efficitur nisl.",
    "Praesent sodales augue id ultrices imperdiet.",
    "Proin tempor orci in elementum lacinia.",
    "Aenean euismod tellus quis dolor egestas, sed venenatis sapien viverra.",
    "Donec iaculis nisl et imperdiet tincidunt.",
    "Ut vel elit nec tortor commodo cursus a ac risus.",
    "Etiam iaculis diam vitae viverra finibus.",
    "Suspendisse nec justo et leo mattis suscipit.",
    "Vivamus bibendum lacus at rhoncus finibus.",
    "Aliquam egestas dui in risus egestas feugiat.",
    "Mauris aliquam ex sed massa efficitur, lobortis commodo purus placerat.",
    "Ut et risus eget mi mollis vulputate.",
    "Curabitur tincidunt felis nec lacus porta sodales.",
    "Quisque tincidunt erat quis porttitor mollis.",
    "Pellentesque consequat nulla sit amet magna bibendum, id tristique felis hendrerit.",
    "Nullam ac nisi ac dui aliquam lobortis.",
    "Nulla mollis felis vel dignissim mollis.",
    "Aenean imperdiet ligula nec pharetra egestas.",
    "Phasellus at diam mollis, viverra sem a, pretium justo.",
    "Nam ut mauris et purus viverra facilisis quis vel ipsum.",
    "Vivamus luctus dui eu velit pharetra semper.",
    "Pellentesque interdum mauris non dignissim auctor.",
    "Maecenas mattis risus vel dolor lobortis sodales eu non mi.",
    "Cras eget tortor sed est commodo faucibus eu ac massa.",
    "Fusce tempus ex id venenatis auctor.",
    "Maecenas ac metus fringilla, ullamcorper est vitae, sodales mauris.",
    "Quisque pulvinar massa sed risus tincidunt porttitor.",
    "Fusce vitae nisi ut ipsum egestas cursus id at dolor.",
    "Phasellus semper sapien vel malesuada commodo.",
    "Ut et diam gravida, ornare lorem nec, placerat lectus.",
    "Aenean lobortis est vel ipsum lobortis, rhoncus rhoncus mauris feugiat.",
    "Phasellus nec lacus feugiat, facilisis lectus quis, semper libero.",
    "Nunc faucibus erat vel eros euismod scelerisque.",
    "Vivamus ultricies ligula at tincidunt gravida.",
    "Duis blandit neque vitae ipsum porttitor, eu mattis tellus molestie.",
    "Donec congue ligula aliquam lorem placerat bibendum.",
    "Donec sollicitudin purus eu sapien imperdiet elementum.",
    "Morbi iaculis elit eu arcu fermentum auctor.",
    "Mauris vitae urna fermentum velit vestibulum ullamcorper.",
    "Morbi a augue in mi interdum maximus.",
    "Pellentesque ut lacus eget magna mattis vulputate eget vel lacus.",
    "Sed id nisi non metus porta auctor.",
    "Nullam ut massa sit amet odio viverra efficitur.",
    "Donec at velit pellentesque lectus rhoncus congue.",
    "Curabitur nec nunc at elit ultrices accumsan.",
    "Phasellus vel justo molestie, feugiat felis non, egestas turpis.",
    "Integer aliquam est ac libero ornare, lacinia ornare ante imperdiet.",
    "Aliquam elementum sem ut metus mollis varius.",
    "Nulla euismod arcu ac magna elementum, finibus eleifend sapien cursus.",
    "Sed dignissim nisi ac metus suscipit malesuada.",
    "Quisque consequat purus a velit pulvinar pretium.",
    "Nunc euismod libero suscipit, interdum mi at, vulputate nisi.",
    "Sed id neque a ligula elementum bibendum.",
    "Nam eu neque et magna efficitur consectetur.",
    "In in nunc in metus rutrum porttitor.",
    "Integer nec eros luctus, euismod nisi non, dapibus lacus.",
    "Curabitur nec turpis rhoncus, iaculis dui quis, dapibus odio.",
    "Proin rhoncus urna vel felis efficitur, at condimentum odio ultrices.",
    "Sed commodo urna aliquam sollicitudin vulputate.",
    "Aenean nec libero sed odio hendrerit convallis a eget lectus.",
    "Aenean non justo consequat enim mollis tempus.",
    "Donec condimentum nisi sed eleifend imperdiet.",
    "Vestibulum hendrerit nunc aliquam, dapibus metus eu, congue lorem.",
    "Etiam dapibus lectus vel tempus sodales.",
    "Ut sed erat sed neque suscipit congue sit amet et leo.",
    "Vivamus non nulla sollicitudin tortor mattis convallis.",
    "Donec sit amet lectus aliquet, fringilla augue pharetra, pulvinar lacus.",
    "Mauris id diam eget quam sodales dignissim.",
    "Quisque vel sapien id ligula tempor tempor eget eget purus.",
    "Curabitur eu velit lobortis, vestibulum sem vel, efficitur massa.",
    "Donec a neque ornare, tincidunt risus nec, dignissim ligula.",
    "Praesent sit amet turpis dignissim, efficitur nulla a, porta est.",
    "Donec eleifend lacus id ante porta, vitae semper dolor varius.",
    "Vestibulum ut purus tincidunt enim dignissim bibendum.",
    "Nam bibendum ipsum id tellus placerat, vel imperdiet ligula interdum.",
    "Integer vulputate erat nec lorem luctus maximus.",
    "Suspendisse eget urna id urna laoreet interdum eu ac purus.",
    "Sed id lectus auctor, tincidunt magna vitae, rhoncus mauris.",
    "Praesent at metus sed magna hendrerit vulputate.",
    "Fusce viverra ipsum at ante dapibus venenatis.",
    "Integer vitae mauris vel sem ultricies pretium id consequat justo.",
    "Nullam nec lorem semper, bibendum tortor quis, fringilla nunc.",
    "Cras efficitur ipsum id nisi pharetra, sit amet varius purus facilisis.",
    "Integer non quam pellentesque, mollis dui in, volutpat mauris.",
    "Ut ac nibh sed libero ullamcorper pretium.",
    "Curabitur rhoncus dui sed lobortis porta.",
    "Proin at nulla sit amet quam mollis maximus.",
    "Nunc et nisi eget enim vestibulum venenatis.",
    "Donec id lacus non lacus convallis varius.",
    "Nulla quis turpis lobortis felis porttitor bibendum.",
    "Nunc dapibus lacus in purus vestibulum, ac consectetur metus finibus.",
    "Donec imperdiet nisi ac ligula consectetur venenatis.",
    "Aenean non orci ut enim sagittis faucibus quis ac risus.",
    "Fusce non felis fringilla, gravida sem non, ornare est.",
    "Sed sit amet dolor eu velit porta iaculis non sed risus.",
    "In lacinia ante quis nunc condimentum volutpat.",
    "Aenean condimentum velit ac elementum pellentesque.",
    "Praesent rutrum quam quis ullamcorper vestibulum.",
    "In sit amet lectus sollicitudin, auctor nulla a, vulputate magna.",
    "Maecenas eu dolor eget orci cursus pulvinar.",
    "Mauris aliquam odio nec dolor tempus, sed sagittis enim dignissim.",
    "Nullam eget metus eget ex luctus iaculis.",
    "Nulla pharetra sem eu aliquam vulputate.",
    "Pellentesque dignissim eros vitae auctor tristique.",
    "Praesent ut dolor eu ipsum commodo tempus.",
    "Sed pretium magna sed nulla consectetur scelerisque.",
    "Donec dictum orci sed tellus consectetur, ut aliquam elit maximus.",
    "Curabitur eu diam sit amet dui auctor tempus.",
    "Ut ac sapien consequat, dignissim sapien congue, vestibulum velit.",
    "Pellentesque et purus at tellus sodales posuere in vel ex.",
    "Vivamus vulputate mi vel fermentum semper.",
    "Nullam eget nibh eu ligula consectetur aliquet.",
    "Quisque fermentum nibh sagittis, sollicitudin augue nec, porttitor tortor.",
    "Sed eget diam pellentesque, cursus tortor quis, rhoncus ante.",
    "Duis eu ligula in lacus eleifend ultricies eu eget augue.",
    "Sed sed justo vitae sapien consequat dictum ut nec erat.",
    "Sed vehicula ipsum vel ornare consectetur.",
];

const mockString = i => 
  LINES[randomInt(0, LINES.length)];

const mockIsDone = () => {
  const num = randomInt(0,3); 
  if (num === 0){
      return true;
  } else {
      return false;
  }
}

const mockCreatedDate = () => {
  return new Date(randomInt(2001,2021),randomInt(0,12),randomInt(1,32),randomInt(0,24));
} 

const mockDoneDate = (isDone, createdDate) => {

  if (!isDone) {
      return null;
  }

  return new Date(createdDate.getTime()+randomInt(2,30) * 8.64e+7);
} 

const mockToDo = () => {
  const isDone = mockIsDone();
  const createdDate = mockCreatedDate();
  const doneDate = mockDoneDate(isDone, createdDate);
  return new ToDoItem(null, mockString(), mockString(), isDone, createdDate, doneDate); 
}

const mockToDoList = createArray(mockToDo);
