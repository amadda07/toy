package com.jayho;

import java.util.*;

/**
 * 터미널(콘솔)에서 직접 입력을 받아 실행해보기 위한 클래스
 */
public class CodingTest01Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        List<Map<String, Integer>> scList = new ArrayList<>();

        System.out.println("데이터를 입력하세요 (형식: 시작층 끝층 사람유무 상자유무). 총 3번 입력받습니다:");

        for (int i = 0; i < 3; i++) {
            System.out.print((i + 1) + "번째 입력: ");
            HashMap<String, Integer> map = new HashMap<>();
            map.put("startFloor", sc.nextInt());
            map.put("endFloor", sc.nextInt());
            map.put("person", sc.nextInt());
            map.put("box", sc.nextInt());
            scList.add(map);
        }

        int totalSum = scList.stream().mapToInt(map -> {
            int start = map.get("startFloor");
            int end = map.get("endFloor");
            int person = map.get("person");
            int box = map.get("box");

            int distance = 10 * Math.abs(end - start);
            int sum = (person > 0 ? 5 : 0) + (box > 0 ? 8 : 0);
            return distance * sum;
        }).sum();

        System.out.println("\n계산된 총합: " + totalSum);
        sc.close();
    }
}