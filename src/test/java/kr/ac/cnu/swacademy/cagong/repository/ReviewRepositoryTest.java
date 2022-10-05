package kr.ac.cnu.swacademy.cagong.repository;

import kr.ac.cnu.swacademy.cagong.entity.Review;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.assertj.core.api.Assertions.assertThat;


@SpringBootTest
class ReviewRepositoryTest {

    @Autowired
    ReviewRepository reviewRepository;

    @BeforeEach
    void setup() {}

    @AfterEach
    void cleanUp() {
        reviewRepository.deleteAll();
    }

    @Test
    @Transactional
    void 리뷰를_저장한다() {
        // given
        Review review = Review.builder()
                .clean(5)
                .concentration(5)
                .seat(5)
                .content("hello")
                .imageUrl("greagerg")
                .build();

        // when
        Review save = reviewRepository.save(review);

        // then
        Optional<Review> found = reviewRepository.findById(save.getId());
        assertThat(found).isPresent();
        assertThat(found.get()).isEqualTo(save);
    }

    @Test
    void 리뷰를_모두_조회한다() {
        // given
        Review review1 = Review.builder()
                .clean(5)
                .concentration(5)
                .seat(5)
                .content("hello")
                .imageUrl("greagerg")
                .build();

        Review review2 = Review.builder()
                .clean(5)
                .concentration(5)
                .seat(5)
                .content("hello")
                .imageUrl("greagerg")
                .build();

        Review save1 = reviewRepository.save(review1);
        Review save2 = reviewRepository.save(review2);

        // when
        List<Review> all = reviewRepository.findAll();

        // then
        assertThat(all).hasSize(2);
    }


}