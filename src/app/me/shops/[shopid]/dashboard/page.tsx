import Typography from "@/components/ui/Typography"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Dashboard',
    description: 'Shop dashboard',
}

export default () => {
    return (
        <div className="mt-16 flex flex-col gap-3">
            <Typography variant="h1">
                Alapan's Store
            </Typography>
            <Typography variant="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo mollitia aliquid in pariatur eligendi maiores nesciunt, repudiandae quis. Sequi, suscipit! Ipsum dolorum blanditiis repudiandae itaque nesciunt dolores libero harum impedit!
                Nisi aliquid dolorum eaque tenetur delectus nemo, perspiciatis officia. Tempore minus doloremque ipsam itaque dicta. Illum, hic! Quos adipisci vitae error reprehenderit necessitatibus et, quidem quo autem temporibus repudiandae nulla.
                Deserunt recusandae non molestiae dignissimos odit aliquid, animi ratione illum, asperiores sit nisi, dolor labore. Facere, quisquam hic ut blanditiis enim magni odio vitae reiciendis nobis deleniti consequatur culpa dolorum!
                Odit aut voluptate, eveniet ipsum vero quam. Rem aspernatur minima nostrum omnis, consequatur at tempora incidunt dolorum voluptate voluptates quo! Voluptatem, modi aspernatur. Quod voluptate consequuntur atque in dignissimos facere.
                Quaerat non nihil ex quos alias nulla ducimus doloremque eos ipsum, laudantium recusandae eum quo iure nobis hic officiis quibusdam magni rerum numquam. Ipsum voluptas rem expedita, incidunt reiciendis porro!
            </Typography>
        </div>
    )
}