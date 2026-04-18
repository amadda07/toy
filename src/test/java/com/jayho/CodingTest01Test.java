package com.jayho;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import java.util.*;

import static org.junit.jupiter.api.Assertions.assertEquals;

/**
 * 코딩 테스트 문제 풀이를 위한 테스트 클래스
 */
public class CodingTest01Test {

    public int solution(int[][] inputs) {
        return Arrays.stream(inputs).mapToInt(input -> {
            int start = input[0];
            int end = input[1];
            int person = input[2];
            int box = input[3];

            int distance = 10 * Math.abs(end - start);
            int feePerFloor = (person > 0 ? 5 : 0) + (box > 0 ? 8 : 0);
            return distance * feePerFloor;
        }).sum();
    }

    @Test
    @DisplayName("코딩 테스트 01 - 엘리베이터 이동 계산 테스트")
    void testCase1() {
        // Given (입력 데이터 세팅: 각 배열은 {startFloor, endFloor, person, box} 의미)
        int[][] inputs = {
            {1, 5, 1, 0}, // 1층 -> 5층 (거리 40), 사람O 상자X (비용 5) => 40 * 5 = 200
            {5, 2, 0, 1}, // 5층 -> 2층 (거리 30), 사람X 상자O (비용 8) => 30 * 8 = 240
            {2, 6, 1, 1}  // 2층 -> 6층 (거리 40), 사람O 상자O (비용 13) => 40 * 13 = 520
        };
        // 예상 결과: 200 + 240 + 520 = 960
        int expected = 960;

        // When (메서드 실행)
        int actual = solution(inputs);

        // Then (결과 검증)
        assertEquals(expected, actual, "계산된 총합이 일치해야 합니다.");
    }
}