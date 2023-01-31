import moment from '../index.js'
import chai from 'chai'

const expect = chai.expect

describe('Moment ages', function () {
	describe('.age', function () {
		describe('When now is 2023-01-31', function () {
			it('1983-10-27 should be years: 39, months: 3, days: 3', function (done) {
				expect(moment('1983-10-27').age('2023-01-31')).to.eql({
					years: 39,
					months: 3,
					days: 3,
				})
				done()
			})
		})
	})

	describe('.ageFrom', function () {
		describe('When input is 1983-10-27', function () {
			it('2023-01-31 should be years: 39, months: 3, days: 3', function (done) {
				expect(moment('2023-01-31').ageFrom('1983-10-27')).to.eql({
					years: 39,
					months: 3,
					days: 3,
				})
				done()
			})
		})
	})

	describe('.isAgeBetween', function () {
		describe('When range is between 30 and 40 and now is 2023-01-31', function () {
			it('birth at 1993-02-01 (a day before 30th birth date) should be false', function (done) {
				expect(moment('1993-02-01').isAgeBetween(30, 40, '2023-01-31')).to.eql(
					false
				)
				done()
			})
			it('birth at 1993-01-31 (on 30th birth date) should be true', function (done) {
				expect(moment('1993-01-31').isAgeBetween(30, 40, '2023-01-31')).to.eql(
					true
				)
				done()
			})
			it('birth at 1982-02-01 (a day before 41th birth date) should be true', function (done) {
				expect(moment('1982-02-01').isAgeBetween(30, 40, '2023-01-31')).to.eql(
					true
				)
				done()
			})
			it('birth at 1982-01-31 (on 41th birth date) should be false', function (done) {
				expect(moment('1982-01-31').isAgeBetween(30, 40, '2023-01-31')).to.eql(
					false
				)
				done()
			})
		})
	})
})
