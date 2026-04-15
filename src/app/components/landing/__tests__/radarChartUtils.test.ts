import {
    getAngle,
    polarToCartesian,
    getSkillPolygonPoints,
    getGridPolygonPoints,
    getLabelPosition,
    getSkillPointPosition,
    SkillData
} from '../skillsShowcase/radarChartUtils';

describe('radarChartUtils', () => {
    describe('getAngle', () => {
        test('returns -90 for the first item (12 o\'clock position)', () => {
            // Given / When
            const angle = getAngle(0, 4);

            // Then
            expect(angle).toBe(-90);
        });

        test('returns 0 for the second of four items (3 o\'clock position)', () => {
            // Given / When
            const angle = getAngle(1, 4);

            // Then
            expect(angle).toBe(0);
        });

        test('distributes angles evenly', () => {
            // Given / When
            const angle0 = getAngle(0, 4);
            const angle1 = getAngle(1, 4);

            // Then
            expect(angle1 - angle0).toBe(90);
        });
    });

    describe('polarToCartesian', () => {
        test('returns the top center point at 0 radius', () => {
            // Given / When
            const point = polarToCartesian(100, 100, 0, -90);

            // Then
            expect(point.x).toBeCloseTo(100);
            expect(point.y).toBeCloseTo(100);
        });

        test('returns the correct point at 90 degrees (right side)', () => {
            // Given / When
            const point = polarToCartesian(0, 0, 100, 0);

            // Then
            expect(point.x).toBeCloseTo(100);
            expect(point.y).toBeCloseTo(0);
        });

        test('returns the correct top point at -90 degrees', () => {
            // Given / When
            const point = polarToCartesian(0, 0, 100, -90);

            // Then
            expect(point.x).toBeCloseTo(0);
            expect(point.y).toBeCloseTo(-100);
        });
    });

    describe('getSkillPolygonPoints', () => {
        test('returns a non-empty string of polygon points', () => {
            // Given
            const skills: SkillData[] = [
                { name: 'A', level: 100 },
                { name: 'B', level: 50 },
                { name: 'C', level: 75 }
            ];

            // When
            const points = getSkillPolygonPoints(skills, 100, 100, 80);

            // Then
            expect(typeof points).toBe('string');
            expect(points.split(' ')).toHaveLength(3);
        });

        test('returns the same point for a 100% skill at max radius', () => {
            // Given
            const skills: SkillData[] = [{ name: 'A', level: 100 }];

            // When
            const points = getSkillPolygonPoints(skills, 100, 100, 80);
            const gridPoints = getGridPolygonPoints(1, 100, 100, 80);

            // Then — a 100% skill should land on the full-radius grid ring
            expect(points).toBe(gridPoints);
        });
    });

    describe('getGridPolygonPoints', () => {
        test('returns correct number of points', () => {
            // Given / When
            const points = getGridPolygonPoints(6, 100, 100, 80);

            // Then
            expect(points.split(' ')).toHaveLength(6);
        });
    });

    describe('getLabelPosition', () => {
        test('returns an object with x, y, and anchor', () => {
            // Given / When
            const pos = getLabelPosition(0, 4, 100, 100, 80);

            // Then
            expect(typeof pos.x).toBe('number');
            expect(typeof pos.y).toBe('number');
            expect(['start', 'middle', 'end']).toContain(pos.anchor);
        });
    });

    describe('getSkillPointPosition', () => {
        test('returns an object with x and y coordinates', () => {
            // Given
            const skill: SkillData = { name: 'A', level: 80 };

            // When
            const pos = getSkillPointPosition(skill, 0, 4, 100, 100, 80);

            // Then
            expect(typeof pos.x).toBe('number');
            expect(typeof pos.y).toBe('number');
        });

        test('returns center when skill level is 0', () => {
            // Given
            const skill: SkillData = { name: 'A', level: 0 };

            // When
            const pos = getSkillPointPosition(skill, 0, 4, 100, 100, 80);

            // Then
            expect(pos.x).toBeCloseTo(100);
            expect(pos.y).toBeCloseTo(100);
        });
    });
});
