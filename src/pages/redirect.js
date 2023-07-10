import EmptyLayout from '@/components/Global/EmptyLayout';
import { Flex, Text } from '@chakra-ui/layout';
import { Image } from "@chakra-ui/react";
import { useRouter } from 'next/router';
import styles from "@/styles/redirect.module.css";

export default function Home() {
    let url;
    if(typeof window !== undefined) {
        const router = useRouter();
    
        url = router.query.r || "/";
    
        const seconds = 5;
    
        setTimeout(() => {
            try {
                window.location = url;
            } catch {}
        }, seconds * 1000);
    }

    return (
        <EmptyLayout pageTitle={"Home"}>
            <Flex justify={'center'} align={'center'} h={"100vh"} flexDirection={"column"}>
                <Image className={styles.loader} src={"/img/Bean-Circle.png"} boxSize={"128px"} alt={"Logo"} mb={8} />
                <Text fontWeight={700}>Redirecting you to {url}</Text>
            </Flex>
        </EmptyLayout>
    );
}
