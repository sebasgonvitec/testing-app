import {grade_to_letter, date_to_american, remove_surname, format_line} from './conversions'

describe('Individual functions', () => {

  test('grade conversion', () => {
    expect(grade_to_letter(93)).toBe('A');
    expect(grade_to_letter(83)).toBe('B');
    expect(grade_to_letter(75)).toBe('C');
    expect(grade_to_letter(71)).toBe('C-');

    expect(grade_to_letter(30)).toBe('E');
  });

  test('date conversion', () => {
    expect(date_to_american('24/06/2021')).toBe('06/24/2021');
    expect(date_to_american('18/12/2021')).toBe('12/18/2021');
    expect(date_to_american('12/15/2022')).toBe('15/12/2022');
  });

  test('renove surname', () => {
    expect(remove_surname('Loreto Sepúlveda Torres')).toBe('Loreto Sepúlveda');
    expect(remove_surname('Benito Ramos Félix')).toBe('Benito Ramos');
    expect(remove_surname('Gloria Mata Vázquez')).toBe('Gloria Mata');
  });

});

describe('Complete line', () => {
  test('convert line', () => {
    let line = [];
    let result = [];
    line = ['1', 'Loreto Sepúlveda Torres', 'A12345678', '24/06/2021', '83'];
    result = ['1', 'Loreto Sepúlveda', 'A12345678@tec.mx', '06/24/2021', 'B'];
    expect(format_line(line)).toStrictEqual(result);
    line = ['6', 'Benito Ramos Félix', 'A20693321', '22/06/2022', '71'];
    result = ['6', 'Benito Ramos', 'A20693321@tec.mx', '06/22/2022', 'C-'];
    expect(format_line(line)).toStrictEqual(result);
    line = ['8', 'Gloria Mata Vázquez', 'A27780010', '23/06/2022', '75'];
    result = ['8', 'Gloria Mata', 'A27780010@tec.mx', '06/23/2022', 'C'];
    expect(format_line(line)).toStrictEqual(result);

  });

});