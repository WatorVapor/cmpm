module;
#include <stdio.h>
#include <stdarg.h>
export module std.core;
export namespace std {
	int printf(const char *__fmt, ...) {
		va_list ap;
		va_start( ap, __fmt );
		auto ret = ::printf(__fmt, ap);
		va_end( ap );
		return ret;
	}
	int fprintf(FILE* __fp , const char* __fmt, ...){
		va_list ap;
		va_start( ap, __fmt );
		auto ret = ::fprintf(__fp,__fmt, ap);
		va_end( ap );
		return ret;
	}
	int fscanf(FILE* __fp, const char* __fmt, ...){
		va_list ap;
		va_start( ap, __fmt );
		auto ret = ::fscanf(__fp,__fmt, ap);
		va_end( ap );
		return ret;
	}
	int scanf(const char* __fmt, ...){
		va_list ap;
		va_start( ap, __fmt );
		auto ret = ::scanf(__fmt, ap);
		va_end( ap );
		return ret;
	}
	int sscanf(const char* __s, const char* __fmt, ...) {
		va_list ap;
		va_start( ap, __fmt );
		auto ret = ::sscanf(__s,__fmt, ap);
		va_end( ap );
		return ret;			
	}
	void clearerr(FILE* __fp) {
		::clearerr(__fp);
	}
	int fclose(FILE* __fp) {
		return ::fclose(__fp);
	}
	int feof(FILE* __fp) {
		return ::feof(__fp);
	}
	int ferror(FILE* __fp) {
		return ::ferror(__fp);
	}
	int fflush(FILE* __fp) {
		return ::fflush(__fp);
	}
	int fgetc(FILE* __fp) {
		return ::fgetc(__fp);
	}
	char* fgets(char* __buf, int __size, FILE* __fp) {
		return ::fgets(__buf,__size,__fp);
	}
	int fputc(int __ch, FILE* __fp) {
		return ::fputc(__ch,__fp);
	}
	int fputs(const char* __s, FILE* __fp) {
		return ::fputs(__s,__fp);
	}
	unsigned int fread(void* __buf, unsigned int __size, unsigned int __count, FILE* __fp) {
		return ::fread(__buf,__size,__count,__fp);
	}
	unsigned int fwrite(const void* __buf, unsigned int __size, unsigned int __count, FILE* __fp) {
		return ::fwrite(__buf,__size,__count,__fp);
	}
	int getc(FILE* __fp) {
		return ::getc(__fp);
	}
	int getchar(void) {
		return ::getchar();
	}
	/*
	int getdelim(char** __line_ptr, unsigned int* __line_length_ptr, int __delimiter, FILE* __fp) {
		return ::getdelim(__line_ptr,__line_length_ptr,__delimiter,__fp);
	}
	int getline(char** __line_ptr, unsigned int* __line_length_ptr, FILE* __fp) {
		return ::getline(__line_ptr,__line_length_ptr,__fp);
	}
	*/
	void perror(const char* __msg) {
		::perror(__msg);
	}
	int putc(int __ch, FILE* __fp) {
		return ::putc(__ch,__fp);
	}
	int putchar(int __ch) {
		return ::putchar(__ch);
	}
	int puts(const char* __s) {
		return ::puts(__s);
	}
	int remove(const char* __path) {
		return ::remove(__path);
	}
	void rewind(FILE* __fp) {
		return ::rewind(__fp);
	}
	void setbuf(FILE* __fp, char* __buf) {
		::setbuf(__fp,__buf);
	}
	int setvbuf(FILE* __fp, char* __buf, int __mode, size_t __size) {
		return ::setvbuf(__fp,__buf,__mode,__size);
	}
	int ungetc(int __ch, FILE* __fp) {
		return ::ungetc(__ch,__fp);
	}
	int vfprintf(FILE* __fp, const char* __fmt, va_list __args) {
		return ::vfprintf(__fp,__fmt,__args);
	}
	int vprintf(const char* __fmt, va_list __args) {
		return ::vprintf(__fmt,__args);
	}
}

