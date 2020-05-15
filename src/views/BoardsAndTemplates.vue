<template>
  <div>
    <Header class="header" :hasLogin="true" />

    <div class="body d-flex align-items-start justify-content-center">
      <div class="sidebar ml-2">
        <router-link
          class="mb-3 d-block text-decoration-none"
          :to="{ name: 'user-boards', params: { username: 'zan' } }"
        >
          <b-icon icon="layout-three-columns"></b-icon>
          Boards
        </router-link>
        <router-link
          class="mb-3 d-block text-decoration-none"
          :to="{ name: 'templates' }"
        >
          <b-icon icon="clipboard"></b-icon>
          Templates
        </router-link>
      </div>

      <div class="all-boards w-100 ml-5">
        <template v-if="$route.name === 'user-boards'">
          <div class="d-flex align-items-start flex-wrap">
            <div v-for="(board, index) of user.boards" :key="board.id">
              <router-link
                class="text-decoration-none"
                :to="{
                  name: 'board',
                  params: { id: board.id, title: board.title }
                }"
              >
                <div
                  class="position-relative board-thumnail mr-4 mb-4 font-weight-bold rounded-lg"
                >
                  <p>{{ board.title }}</p>
                  <b-icon
                    class="remove-board"
                    icon="trash"
                    @click.prevent="removeBoard(index)"
                  />
                </div>
              </router-link>
            </div>

            <input
              type="text"
              class="board-adder border-0 rounded-lg text-center"
              placeholder="+ Add another board"
              @keyup.enter="addBoard($event)"
            />
          </div>
        </template>

        <template v-else-if="$route.name === 'templates'">
          <div>Template content</div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            eligendi ipsam eveniet delectus, quae minus voluptas molestias modi.
            Eius similique saepe dolor, nostrum vitae corrupti rerum earum
            soluta sit officiis? Aut voluptate inventore dignissimos, iure
            exercitationem eius commodi iusto ipsam nam vitae mollitia,
            assumenda velit quos dolorem, sequi officia quo ab et. Fugiat neque
            facilis adipisci maiores. Error, odio ea. Unde odit repellat nostrum
            sequi consectetur voluptate vitae harum dolore quia quod saepe, eum
            itaque voluptates blanditiis tenetur, deserunt cupiditate, assumenda
            dicta? Reprehenderit, mollitia. Ratione consectetur odit dolor quas
            suscipit? Ratione labore nemo, sed numquam veniam vitae modi tenetur
            cumque adipisci expedita. Accusantium blanditiis commodi eligendi
            quos cum aperiam non molestias aliquam debitis, sint explicabo
            itaque, corrupti reiciendis adipisci! Ea. Rem repellat non
            aspernatur, ab ratione voluptas eius debitis. Ea dolores sit,
            suscipit molestias velit ullam asperiores unde facilis placeat totam
            hic voluptatem rerum? Aut totam natus atque quaerat quos. Laborum
            dicta impedit itaque minima debitis optio sit cumque neque! Nobis et
            unde ipsam officia dolore ipsum, suscipit blanditiis expedita
            explicabo provident id veritatis voluptate dolor illum iure, ducimus
            aliquam. Sequi suscipit ex nostrum a nihil blanditiis autem atque
            ipsam voluptate quisquam tempora praesentium repudiandae ea sapiente
            commodi, molestias vero labore minus voluptas cumque libero et
            deleniti. Repellat, omnis rerum. Quas ullam nisi eligendi cumque
            tenetur itaque eaque, eveniet enim, facere consectetur aperiam
            maxime molestias unde quis voluptas ex nam fugit esse odit! Nemo
            nisi consequatur, hic dolor ad repellat. Quos, cum libero eaque
            quibusdam minima odit inventore perspiciatis? Vitae fugit iusto
            numquam! Sed illum ea et expedita voluptate voluptatum reprehenderit
            hic deleniti a libero voluptatem, quos adipisci. Excepturi, ullam.
            Modi magni impedit voluptatibus voluptatem beatae, debitis facere.
            Fuga quaerat minima quos, consequuntur eveniet, at aliquid eaque
            itaque magnam quod dolor, aut reprehenderit libero dignissimos nihil
            quas odio quam cum? Dolorem cupiditate adipisci dicta magnam,
            blanditiis fugit debitis omnis officiis praesentium at perspiciatis
            consequuntur ut sed tempora ab repellendus inventore possimus
            eveniet, doloribus ipsum? Sint cumque nihil ratione est at. Sed ut
            animi officia rerum natus repellat dicta, voluptatum voluptatem quo
            provident, aliquam qui quidem eligendi incidunt? Voluptates sed
            aliquam consectetur a, accusamus laboriosam consequatur pariatur,
            dolorem enim voluptatum eos! Iure adipisci ipsum necessitatibus
            ullam unde recusandae eaque excepturi dignissimos nulla maiores.
            Aspernatur laboriosam nulla nihil, ullam unde, dignissimos, aut
            omnis ipsum dolorem repellat quo error iusto! Maxime, impedit nisi?
            Ipsam facilis libero odit, nostrum eius aut iusto voluptates maxime
            dolor quod expedita porro, corrupti numquam, voluptatibus sint?
            Eligendi libero eaque aperiam eum ipsum quas delectus illum dolore
            consequuntur est. Atque dolorum eos nam labore odio, provident rem
            quas laboriosam? Omnis dolorem architecto dolor! Distinctio corporis
            ea culpa voluptates ad? Sequi porro ratione consequatur labore
            adipisci natus, tempore voluptatem culpa? Consequatur eligendi nobis
            a laborum illo tenetur id officiis asperiores iste error, expedita
            ab illum ad neque possimus consequuntur doloribus fugit quis sequi
            aspernatur perferendis quo quia? Voluptatem, tenetur soluta. Animi
            sequi sit vero inventore porro modi non ex, laborum tenetur saepe
            amet tempora similique? Placeat possimus tempore temporibus beatae
            ipsum dicta nesciunt ipsa, blanditiis maxime culpa unde, saepe
            fugiat? Quos possimus velit perferendis ab! Quos tenetur similique
            voluptas magni quam magnam, repellat dolorem pariatur velit
            necessitatibus itaque iure eveniet? Repellat quisquam neque rem.
            Explicabo sit placeat magni nemo ex. Voluptatem, tempora aperiam
            iste maxime pariatur non eaque assumenda cumque, dolor quia corporis
            sint natus amet ea iusto neque praesentium quis quos dignissimos
            eveniet doloremque. Sint quia mollitia commodi voluptates? Totam,
            ratione? Iusto sit voluptatem, excepturi obcaecati quo porro ad
            incidunt maiores nesciunt! Dolor nostrum dolorem nam eum
            necessitatibus id odit nihil aut. Qui odit dolorum nulla veritatis a
            culpa. Officia modi vero maiores suscipit assumenda eveniet numquam
            magni vel, nesciunt, odio quam quisquam facere, consequatur
            accusantium? Quos natus dolorum a itaque suscipit, inventore aliquam
            est quibusdam tempora molestiae maxime. Cupiditate ducimus eveniet
            animi voluptates, reprehenderit exercitationem omnis odio,
            laboriosam quis aperiam debitis dolor nobis veritatis quae sit harum
            expedita vitae fugit veniam in excepturi corporis consequuntur?
            Quod, asperiores tempora? Perspiciatis eaque sunt tempora culpa ipsa
            ipsum, sequi sit dolor, dolorem beatae, qui eveniet ab blanditiis
            non. Ullam voluptatibus repudiandae, nobis, reiciendis perspiciatis
            nihil sint doloremque quam vero animi maiores. Nam odio omnis quidem
            incidunt, ad temporibus ipsum optio atque, totam quisquam reiciendis
            molestias eum dolore voluptatibus quia vel aut, ea assumenda iure
            sapiente. Dolores eaque ut voluptas veniam ipsa? Impedit illo quos
            deserunt dolorem dolore nostrum necessitatibus consequuntur repellat
            tempora unde? Cum repellat quasi deleniti dolore? Vel provident et
            sequi obcaecati eius autem ad, voluptas, ex atque officia quisquam.
            Ipsam repellendus nobis quod voluptate perferendis veritatis iure,
            facere magni aspernatur libero atque necessitatibus fuga est
            reiciendis architecto voluptas distinctio officia omnis. Hic
            delectus cumque perspiciatis! Quis at itaque ab? Obcaecati mollitia
            quidem corrupti sed ipsam! Voluptas suscipit, nihil dolore minus
            atque facere! Fugit, consectetur? Omnis, in aut. Ut at sequi alias
            ipsum, deserunt reiciendis officiis beatae cupiditate tenetur quae.
            Reiciendis unde possimus quidem atque, perspiciatis nisi cupiditate
            harum quis aspernatur placeat repellendus nemo hic eligendi
            voluptates fugiat numquam nesciunt nostrum. Et expedita ipsa
            dignissimos saepe ducimus! Adipisci, nostrum eligendi! Neque sequi
            corporis, provident fuga repudiandae nisi laboriosam dolor. Culpa
            reiciendis esse maiores eligendi vel aspernatur iusto aperiam,
            excepturi dolorum cum. Veritatis minus rem eveniet illum,
            accusantium aliquam quod placeat? Dicta quia quos aperiam assumenda
            reprehenderit consequatur, labore voluptates molestias deserunt,
            est, voluptatum quo tenetur officiis doloribus pariatur quidem nisi
            perspiciatis aliquid quam quae consequuntur! Exercitationem
            blanditiis molestias fugit officia. Amet accusantium pariatur
            aperiam sed numquam unde, temporibus laborum eaque dolorem minus,
            architecto sit ab commodi impedit necessitatibus. Qui, quibusdam
            deleniti dolore ab in quas quisquam aspernatur? Non, nemo ut.
            Delectus nihil cum possimus aspernatur voluptatibus vitae alias,
            numquam libero omnis dolores mollitia consequatur consequuntur
            laborum odit repellendus! Quaerat enim aliquid quae nesciunt earum,
            pariatur expedita quod sit veniam recusandae? Ab quia hic non quis
            autem adipisci iure temporibus sunt, id unde. Ratione quae ipsam
            amet natus? Asperiores quis placeat, necessitatibus nisi eum neque
            totam. Animi nemo soluta quasi non! Minima reprehenderit perferendis
            explicabo iusto! Nemo optio ullam aliquid rerum doloribus qui, quis
            quod ex dolorem numquam sequi sit. Nemo dolores exercitationem
            velit. Aut delectus ullam ipsa laboriosam? Consectetur,
            exercitationem? Id debitis repudiandae consequuntur, vel quibusdam
            sapiente minus iusto ullam ex harum eligendi velit nisi, blanditiis
            modi repellendus sequi nihil, distinctio praesentium! Obcaecati
            provident voluptatum eveniet laborum atque consectetur harum!
            Laborum ex asperiores adipisci sed facilis ut similique vel libero
            aut, itaque labore quidem modi laudantium necessitatibus accusantium
            provident cum praesentium quis cupiditate sapiente debitis. Ipsam
            iusto numquam reprehenderit maiores. Qui earum, velit nesciunt ea
            quaerat, quisquam voluptas voluptatem recusandae adipisci molestias
            laudantium. Porro, cumque quasi commodi ipsum iste voluptate ipsa,
            sunt odit sint laboriosam iure voluptatem quaerat ut totam?
            Blanditiis explicabo quod, necessitatibus magni accusamus ex!
            Obcaecati dolorem unde praesentium tempora ea labore maiores neque
            quisquam, quasi molestias saepe aut error accusantium possimus
            impedit vitae esse quam iusto at. Nihil unde dolorem rerum cum
            pariatur. Ex ducimus neque repudiandae vitae molestiae illo, eos
            porro distinctio incidunt aperiam cumque at tempore officia?
            Provident explicabo ex dolore veritatis amet ea id. Tempore odit
            magnam eius quaerat. Totam, recusandae inventore? Consectetur
            numquam molestias consequuntur commodi voluptates rerum voluptas
            culpa exercitationem ab, accusamus sunt tempore alias illo hic nihil
            perspiciatis quas voluptatem illum? Tempora officiis reprehenderit
            tenetur eaque culpa, quae commodi, at, accusantium unde nam ut
            impedit porro. Illo dolorum alias maxime dolores nihil nesciunt,
            rerum magnam sequi eius, quae error nisi voluptate. Dicta neque
            accusantium est sapiente incidunt, alias fugiat provident
            reiciendis. Perspiciatis possimus fuga ullam omnis officiis, eum
            eius excepturi itaque aspernatur ex consequatur maxime perferendis
            eos veritatis quia asperiores sequi! Est commodi recusandae dicta
            repellat ipsa soluta deleniti nesciunt, officia eaque amet autem
            inventore porro dolorem. Deleniti quisquam minima quaerat quos
            facere aut eaque mollitia id illo. Cum, quis nulla. Omnis tempore
            natus odio sint. Hic explicabo nam rerum consectetur. Facilis
            eligendi sint aperiam aliquid est unde, laborum ut explicabo ipsa
            ratione molestiae porro dolor quaerat beatae quo rerum labore. Sed
            reiciendis quae distinctio iste esse, provident, possimus non
            similique dolorem doloribus suscipit sapiente aspernatur ducimus?
            Fugit, odit numquam iste quasi autem ad eligendi repellendus dolore,
            amet repudiandae temporibus recusandae? Tenetur harum dignissimos
            facere sunt deleniti itaque aliquid, dolorem commodi corporis fugiat
            fuga? Officia consequatur aliquam dignissimos adipisci, officiis
            quas reprehenderit maiores! Recusandae architecto, dolores quas
            reprehenderit alias sunt pariatur? Quod quibusdam necessitatibus
            iusto minima autem, itaque cupiditate dicta repudiandae, soluta
            molestias in ullam id libero atque adipisci. Sapiente, fugiat. Quae
            fugit ullam deleniti quasi. Possimus illum tenetur in doloribus?
            Facere neque dolor explicabo! Inventore earum, quam consequatur
            debitis tempore velit! Id, numquam voluptatem iusto expedita quas
            amet dicta. Neque facere nulla error nostrum distinctio aspernatur
            itaque id similique consequatur? Fugiat, nisi ducimus aliquid ipsum
            voluptates asperiores corporis quod facilis velit doloremque
            provident voluptatum rem quibusdam recusandae, accusantium numquam
            itaque omnis temporibus dolore laudantium. Reprehenderit eos
            corrupti inventore consequatur quae. Et rerum cum tempora iure
            dignissimos vel omnis delectus incidunt, tenetur nulla pariatur
            harum qui odio, magnam numquam quisquam enim quae impedit facilis!
            Culpa ex quo nam sed, voluptatum est! Soluta, ex. Illum perspiciatis
            saepe tenetur! Ipsam eos, deserunt, dolores, in quasi officia quae
            praesentium eius vitae facilis porro totam ab reprehenderit quo nam
            doloribus nostrum excepturi dolorem magnam itaque! Dolores repellat
            assumenda ad quaerat, aut eos provident culpa quos? Consectetur, eum
            vero laudantium ut iste unde omnis dicta quam. Temporibus
            repellendus recusandae praesentium adipisci, saepe sapiente nihil
            error aut. Enim cupiditate maiores magni at? Quidem ab deserunt modi
            quas corporis iste quam, nihil architecto explicabo iure! Iusto
            quasi reiciendis eligendi itaque, ex perspiciatis voluptate culpa
            odio porro? Explicabo, necessitatibus. Necessitatibus beatae
            aspernatur incidunt veritatis natus ad, eius adipisci vel, dolorum
            cum commodi doloribus alias accusantium officia in, voluptatem fugit
            voluptates non culpa atque officiis omnis perspiciatis labore iusto.
            Aspernatur! Distinctio excepturi impedit delectus, esse labore nam
            consequatur officiis, tempora magnam reiciendis sed quo? Rerum fugit
            obcaecati quasi quae, accusamus iure ab impedit, unde, ut incidunt
            doloremque! Ipsam, assumenda aliquam. Doloribus, saepe explicabo
            minus repudiandae modi temporibus officia autem architecto nulla
            exercitationem, eos, sint eaque accusantium velit. Ipsum ipsam
            suscipit culpa delectus explicabo at aut quia quos? Maxime, quo
            eveniet. Nobis soluta autem natus aspernatur praesentium assumenda
            voluptatem, deserunt veritatis voluptates consequuntur eum
            distinctio error labore, quae, eaque voluptas? Fuga quis et
            accusamus quos amet itaque impedit consectetur, neque explicabo?
            Veniam adipisci, a voluptatibus nam quasi itaque vitae repudiandae
            voluptate quas recusandae hic ipsam rerum nobis ab obcaecati nisi
            optio deserunt temporibus quisquam odio molestiae illum eos. Totam,
            ipsa nostrum. Quae repudiandae ullam, ipsam eligendi inventore neque
            sapiente ab asperiores ea, saepe vel sunt. Ipsam facilis
            necessitatibus hic sint rerum. Deserunt eveniet veniam, tenetur
            dicta natus delectus temporibus veritatis harum. Iure commodi
            molestias nesciunt amet quis? Omnis beatae excepturi fugit iste at
            officia laborum tempora ex quasi dignissimos eius aut facilis cum
            saepe quaerat, ipsam officiis nemo odit similique obcaecati.
            Eveniet, dolores beatae obcaecati in ut voluptatem quam dolore amet
            repellendus expedita iure deleniti ullam, minus doloremque eum,
            harum id eius tenetur commodi consequuntur non! Aliquid deleniti
            repellendus quaerat numquam. Earum tenetur, iure enim nisi totam
            impedit iusto eligendi veritatis facere adipisci deserunt atque
            cumque harum est unde corrupti reprehenderit ipsa voluptatibus
            dolorum. Odio perspiciatis voluptate quas consectetur distinctio
            nemo. Quis aut ab voluptatibus possimus soluta fuga provident, alias
            voluptatem velit cumque nobis est molestiae harum aliquam maxime
            accusamus dolores tempora quasi eum exercitationem repudiandae
            ratione expedita voluptatum. Animi, sed. Quam dicta a quo,
            blanditiis saepe molestias itaque veritatis earum ab, aspernatur
            perferendis in eligendi ipsam animi id harum consequatur facere hic?
            Perspiciatis quibusdam recusandae qui delectus, rerum impedit
            tempore. Distinctio nam voluptatum similique recusandae facere
            voluptates, animi consectetur asperiores atque ab earum facilis
            perferendis possimus iste voluptatem, dolorem non sequi. Ullam
            doloribus voluptatem nam vitae officiis cum ut voluptates! Minima,
            quia iure. Aliquam corrupti alias sequi cupiditate, aliquid placeat
            eum facere a tempora dolore harum odio voluptatibus velit aut
            excepturi voluptatum quisquam. Quidem inventore velit culpa tenetur,
            ipsam molestiae. Distinctio harum id error! At illo minima deserunt
            dolorem unde quisquam vel maiores voluptate, et tenetur delectus id
            veniam obcaecati qui aut dolores libero aspernatur consequatur, nam
            molestiae! Facere, quisquam. Doloribus aliquid reprehenderit sit ab
            quisquam incidunt alias enim tempore necessitatibus iste? Sed,
            architecto praesentium maxime iste provident tempore blanditiis
            inventore placeat cumque dicta et corrupti consectetur nesciunt
            soluta nulla. Fuga accusamus dignissimos possimus doloremque quasi
            corrupti. Libero ipsam fugit soluta laudantium fuga architecto
            similique, laborum ad in excepturi hic maxime, sunt numquam porro
            deleniti totam, iure a obcaecati consectetur! Repellendus in, dicta
            eum ducimus sint impedit quo voluptatum at eligendi hic tempore
            aliquid ullam officia quae amet suscipit saepe molestias voluptas
            corporis similique alias numquam totam expedita. Quasi, aspernatur?
            Dolore omnis asperiores totam repellendus, molestias autem ratione
            possimus. Illo quaerat ratione dolore sapiente aliquid nisi ipsa
            quas eaque delectus perspiciatis minus velit, unde officiis nostrum
            fugit itaque porro voluptas. Hic dolorum natus quasi autem ipsam
            voluptatum labore quo atque maiores sequi temporibus quae ducimus
            cumque reprehenderit harum saepe dicta, voluptas error corporis
            aspernatur voluptates. Corrupti ab consequatur magnam tempore!
            Officia quibusdam at aspernatur laboriosam cupiditate facere
            doloremque, sapiente eius perspiciatis. Deserunt quisquam alias
            quaerat autem ducimus adipisci in odit libero! Magni, itaque
            aliquam! Commodi, obcaecati neque. Autem, fugiat cum? Blanditiis
            corporis deleniti rerum, commodi quo recusandae quae facilis.
            Similique, fugit repellendus. Ratione impedit et, nostrum explicabo
            quibusdam iure. Modi, obcaecati repellat nesciunt nisi consequuntur
            tempore aliquid expedita possimus nemo? Deserunt expedita tempore
            architecto facere ut ducimus omnis, reiciendis eius ullam mollitia?
            Cumque maiores hic nostrum mollitia consectetur ratione, labore rem
            iste quam alias nihil cum quis porro natus incidunt? Rerum minima,
            exercitationem non deserunt magnam, maiores laboriosam voluptatum
            fugit odio nobis commodi! Officiis facere quam quod soluta eligendi?
            Distinctio quis laborum eveniet, ut veritatis iusto sit a
            perferendis ea! Explicabo veniam, cupiditate, rerum possimus sed,
            tenetur totam ut neque beatae fugit natus! Recusandae sint numquam
            impedit deserunt asperiores aspernatur quis. Possimus iusto rerum
            asperiores architecto, consequuntur ipsum reiciendis facilis. Nemo
            dignissimos ut optio quaerat fugiat ipsam esse ipsum nam. Porro
            quibusdam iusto odio nostrum magni, eos libero ex? Eius recusandae
            deserunt quas aliquam, minima voluptatem laborum veritatis at ex?
            Ullam dolore velit voluptatem dolor facere. Impedit illum voluptatem
            quidem repellat harum nisi. Enim eveniet alias a vero voluptatibus
            architecto molestias quo provident omnis sapiente! Dolorem maiores
            atque sunt amet. Iure vel commodi repudiandae, molestias sequi, a
            laboriosam, perspiciatis eveniet optio quisquam voluptatibus fugit
            eaque officia nostrum illo autem numquam! Provident delectus
            repellendus ratione eius nostrum obcaecati doloribus culpa nemo!
            Itaque commodi, blanditiis consequatur quod sunt nihil odio
            accusantium fuga ducimus officiis! Repudiandae ducimus dolorum sint
            molestias fugiat impedit, temporibus esse dolore explicabo iste?
            Blanditiis maxime voluptatibus rerum modi vitae. Dignissimos
            excepturi, maxime, ducimus cum doloremque pariatur nobis sit
            commodi, distinctio voluptates quod beatae optio quidem recusandae
            dolorum nisi consequuntur. Placeat quasi culpa ipsa deleniti fugiat,
            unde tempore fuga magnam? Voluptatibus quisquam molestias alias,
            obcaecati consequatur odit corrupti veritatis neque optio dicta
            autem cum? Harum ex amet impedit, autem ab culpa nobis nisi eos
            inventore maiores doloremque ea veniam quod. Obcaecati similique,
            modi fugiat officiis inventore a amet voluptas, totam nobis
            asperiores, dolor quibusdam quisquam omnis eum sint officia quos
            maiores. Odit quis nesciunt maiores modi at vero deserunt eos? Error
            corporis quos, nostrum, beatae ipsum fuga voluptates quia tempora
            voluptatem ipsa culpa, dolor eum repellat! Pariatur deserunt
            officiis omnis quibusdam ad fugiat incidunt quam ut magni? Possimus,
            voluptatibus iusto? Obcaecati reiciendis itaque at dolores, debitis
            minus delectus commodi molestias, animi temporibus repellat dolore,
            ipsum magni cumque aspernatur error voluptates ex laudantium in
            fugit. Molestiae quisquam qui voluptatem asperiores modi. Sit optio,
            ad architecto impedit porro sequi nihil magni. Praesentium quisquam
            placeat perspiciatis maiores commodi a eos ratione nihil itaque
            aliquid aliquam eum, labore inventore esse perferendis asperiores?
            Voluptatum, nisi! Error numquam sapiente debitis veritatis magnam
            voluptas iure, ipsa vel temporibus est excepturi aliquid facere
            unde? Vitae, quia culpa. Eius ipsa nulla quisquam ratione, commodi
            odit omnis aspernatur non veritatis? Perspiciatis debitis iste
            maiores magni repudiandae deserunt quaerat omnis iure possimus id
            rerum itaque pariatur doloremque error, expedita, nemo doloribus
            provident numquam aliquam aut ex voluptatem accusamus eveniet? Modi,
            nisi? Dolorem eveniet ullam at qui dolores minus consequatur odio
            natus ab rem nesciunt facere autem illum veniam quae animi ut
            assumenda, minima perspiciatis labore eius doloremque! Sapiente id
            nulla esse! Explicabo sunt dolores laborum esse at? Ea velit iure
            nulla consequatur nam fugiat corrupti in laudantium tempore quae
            delectus ex, autem quibusdam quia temporibus doloremque dolore
            culpa, perspiciatis similique fuga. Vero cupiditate consequuntur
            praesentium, nisi porro ad omnis soluta debitis iure voluptate quod
            eius velit voluptatum magnam ipsum totam vel excepturi perferendis?
            Ipsa officia voluptatum eveniet facilis repellendus nam tempora.
            Distinctio quibusdam, consectetur maxime dolores nobis optio
            quisquam totam? Rem, distinctio voluptas hic explicabo totam
            necessitatibus corporis tempore ex deserunt neque accusantium id
            pariatur nesciunt fugit omnis eligendi iusto exercitationem? Harum,
            sequi possimus aut ab, blanditiis debitis necessitatibus maxime quos
            adipisci cum eveniet deleniti nulla nobis modi consequuntur odio
            dolores et numquam, doloribus voluptatem. Aliquid laudantium error
            maiores modi voluptatibus. Inventore omnis enim temporibus iure vero
            dolorum! Sed vitae nihil voluptas nobis similique repudiandae iure
            sint ipsum consectetur maiores alias nam totam debitis eligendi rem
            facilis inventore, eius quaerat officia. Tempore placeat repellat
            voluptatem sapiente ad eaque perferendis ipsam sit, illum
            laudantium, adipisci hic error voluptates. Suscipit enim debitis
            quam voluptates, vel quo dolorem illum. Molestiae quidem suscipit
            nemo at. Debitis perspiciatis perferendis exercitationem commodi
            nulla nemo sint soluta, corrupti hic in recusandae quibusdam dolorem
            porro placeat consequuntur consequatur enim nam. Adipisci quos
            maiores quo dolor esse ratione veritatis error. Sit id deleniti
            blanditiis autem necessitatibus architecto ratione nemo esse
            deserunt similique cupiditate, obcaecati asperiores doloremque
            consectetur. Porro, unde quisquam, facere illo maxime id delectus,
            assumenda aperiam officia ea exercitationem! Rerum voluptate,
            aperiam, vel architecto maxime, necessitatibus quam obcaecati nobis
            reprehenderit quis illum provident ab. Obcaecati quibusdam optio, at
            unde facilis, architecto dignissimos, ullam molestiae repellendus
            porro atque dicta sapiente? Inventore labore temporibus natus
            necessitatibus, perferendis molestiae quae dolorum et facere. Aut
            suscipit iure, sequi dolores corporis voluptates ab voluptatibus
            blanditiis sunt rerum harum cum vitae, ullam dignissimos minima
            aspernatur.
          </p>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import { mapState } from "vuex";
import { uid } from "@/utils/utils.js";
export default {
  computed: {
    ...mapState(["user"])
  },
  methods: {
    addBoard(e) {
      let board = {
        id: uid(),
        title: e.target.value,
        lists: []
      };
      this.$store.commit("ADD_BOARD", { boards: this.user.boards, board });
      e.target.value = "";
    },
    removeBoard(boardIndex) {
      this.$store.commit("REMOVE_BOARD", {
        boards: this.user.boards,
        boardIndex
      });
    }
  },
  components: {
    Header
  }
};
</script>

<style scoped>
.body {
  margin-top: 5rem;
}

.sidebar {
  position: sticky;
  top: 5rem;
  z-index: 999;

  width: 200px;
}

.sidebar a {
  color: black;
}

.sidebar a.router-link-exact-active {
  color: #0079bf;
}

.all-boards {
  min-width: 288px;
  max-width: 900px;
}

.board-thumnail {
  height: 6rem;
  width: 200px;
  padding: 1rem;

  box-shadow: 0px 2px 5px 1px rgb(153, 153, 153);
  word-wrap: break-word;
  overflow: hidden;
  color: white;
  background: #8b88a050;

  transition: all 0.3s ease-in-out;
}

.board-thumnail:hover {
  transform: translateY(-0.5rem);
  box-shadow: 0px 5px 10px 5px rgb(182, 182, 182);
  cursor: pointer;
}

.board-adder {
  height: 6rem;
  width: 200px;
  color: var(--secondary);

  line-height: 6rem;

  box-shadow: 0px 5px 10px 5px rgb(182, 182, 182);

  transform: scale(1.02);
  transition: all 0.3s ease-in-out;
}

.board-adder:hover {
  cursor: pointer;
  background-color: #e7e7e7;
}

.board-adder:focus {
  background-color: #cecece;
  transform: scale(1);
  box-shadow: 0px 2px 5px 1px rgb(153, 153, 153);
  outline: none;
}

.remove-board {
  position: absolute;
  bottom: 10px;
  right: 10px;

  width: 20px;
  height: 20px;

  color: var(--danger);

  opacity: 0;
  transform: translateX(20px);

  transition: all 0.3s ease-in-out;
}

.board-thumnail:hover .remove-board {
  opacity: 1;
  transform: translateX(0px);
}

.remove-board:hover {
  color: red;
  width: 30px;
  height: 30px;
}
</style>
