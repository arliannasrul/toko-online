import getBanner from "@/actions/get-banner";
import Banner from "@/components/banner";
import Container from "@/components/ui/container";

export const  revalidate = 0 

const Homepage = async () => {
    const banner = await getBanner ("")

    return ( 
        <Container>
            <div className="space-y-10 pb-10">
                <Banner data={banner} />
            </div>
        </Container>
     );
}

export default Homepage;